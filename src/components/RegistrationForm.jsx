"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


import { submitRegisterForm } from "../api/register"; 
import { toast } from "react-toastify";
import { Turnstile } from "@marsidev/react-turnstile";

import '../assets/styles/register.css';
import '../assets/styles/floatingForm.css';
import "../assets/styles/team-page.css";

const initialState = {
  playerFirstName: "",
  playerLastName: "",
  dob: "",
  phone: "",
  emailId: "",
  address: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
  category: "",
  positionsPlayed: [],
  positionsTrying: [],
  otherTournaments: [],
  showOtherLeagues: false,
  otherLeagues: [
    { leagueName: "", year: "" },
    { leagueName: "", year: "" }
  ],
  guardianFirstName: "",
  guardianLastName: "",
  guardianEmail: "",
  guardianPhone: "",
  additionalInfo: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const router = useRouter();

  const categories = ["Senior Men", "Junior Men", "Senior Women", "Junior Women"];
  const playedPositions = [
    "Raider", "Defender - Right Corner", "Defender - Left Corner",
    "Defender - Right Cover", "Defender - Left Cover", "All-Rounder", "N/A - New Player"
  ];
  const tryingPositions = [
    "Raider", "Defender - Corner", "Defender - Cover", "All-Rounder", "Any / No Preference"
  ];
  const tournamentsPlayed = [
    "School Level", "District Level", "State Level", "National Level", "International Level"
  ];

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (type === "checkbox" && (name === "permission" || name === "registrationFeeAgreement" || name === "showOtherLeagues")) {
      setForm({ ...form, [name]: checked });
    } else if (type === "checkbox") {
      const groupName = e.target.getAttribute("data-group");
      setForm(prev => {
        const values = prev[groupName];
        return {
          ...prev,
          [groupName]: checked
            ? [...values, value]
            : values.filter(v => v !== value)
        };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.playerFirstName.trim()) newErrors.playerFirstName = "Required";
    if (!form.playerLastName.trim()) newErrors.playerLastName = "Required";
    if (!form.dob) newErrors.dob = "Required";

    if (!form.phone.trim()) newErrors.phone = "Required";
    else if (!/^\d{10}$/.test(form.phone.trim())) newErrors.phone = "Phone must be 10 digits";

    if (!form.emailId.trim()) newErrors.emailId = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailId.trim())) newErrors.emailId = "Invalid email";

    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.country.trim()) newErrors.country = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.pincode.trim()) newErrors.pincode = "Required";
    if (!form.category) newErrors.category = "Select a category";

    if (form.positionsPlayed.length === 0) newErrors.positionsPlayed = "Select at least one position";
    if (form.positionsTrying.length === 0) newErrors.positionsTrying = "Select at least one position";
    if (form.otherTournaments.length === 0) newErrors.otherTournaments = "Select at least one tournament";

    const isJunior = ["Junior Men", "Junior Women"].includes(form.category);
    if (isJunior) {
      if (!form.guardianFirstName.trim()) newErrors.guardianFirstName = "Required for Junior";
      if (!form.guardianLastName.trim()) newErrors.guardianLastName = "Required for Junior";
      if (!form.guardianEmail.trim()) newErrors.guardianEmail = "Required for Junior";
      if (!form.guardianPhone.trim()) newErrors.guardianPhone = "Required for Junior";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);
    setErrors({});

    if (!captchaToken) return toast.error("Please complete verification.");

    const cleanedForm = { ...form };
    Object.keys(cleanedForm).forEach(key => {
      const val = cleanedForm[key];
      if (val === "" || (Array.isArray(val) && val.every(v => v === ""))) delete cleanedForm[key];
    });

    try {
      const submitPromise = submitRegisterForm(cleanedForm, captchaToken);

      toast.promise(submitPromise, {
        pending: "Submitting registration form...",
        success: {
          render({ data }) {
            if (data?.status === 200) {
              setForm(initialState);
              setCaptchaToken("");
              router.push("/");
              return "Form submitted successfully!";
            } else return "Failed to submit form";
          },
        },
        error: { render: () => "Failed to submit form. Try again." },
      });
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred. Try again.");
    }
  };

  return (
    <div className="register" style={{ backgroundImage: `url(/images/register/Ragiter_background.webp)` }}>
      <div className="page-team-header" style={{ backgroundImage: `url(/images/team-page/TeamsPage.png)`, marginTop: '101px' }}>
        <div className="container">
          <div className="content"><h2>REGISTRATION FORM</h2></div>
        </div>
      </div>

      <div className="container">
        <div className="column-2 form-contents">
          <div className="floating-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="section-1">
                  {[
                    { label: "First Name *", name: "playerFirstName" },
                    { label: "Last Name *", name: "playerLastName" },
                    { label: "Date of Birth *", name: "dob", type: "date" },
                    { label: "Phone Number *", name: "phone", type: "tel" },
                    { label: "Email ID *", name: "emailId", type: "email" },
                    { label: "Address *", name: "address" },
                    { label: "State *", name: "state" },
                    { label: "City *", name: "city" },
                    { label: "Pin Code *", name: "pincode" },
                    { label: "Country *", name: "country" },
                  ].map(({ label, name, type = "text" }) => {
                    let extraProps = {};

                    if (name === "dob") {
                      // Restrict DOB year between 1950 and current year
                      const currentYear = new Date().getFullYear();
                      extraProps = {
                        min: "1950-01-01",
                        max: `${currentYear}-12-31`,
                      };
                    }

                    if (name === "phone") {
                      // Restrict phone to digits only and max 10
                      extraProps = {
                        inputMode: "numeric",
                        maxLength: 10,
                      };
                    }

                    return (
                      <div key={name} className="input-container-floating-form wid-50">
                        <label>{label}</label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          {...extraProps}
                        />
                        {errors[name] && <span className="error">{errors[name]}</span>}
                      </div>
                    );
                  })}


                  <div className="input-container-floating-form wid-100">
                    <label>Category *</label>
                    <select name="category" value={form.category} onChange={handleChange}>
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    {errors.category && <span className="error">{errors.category}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                    <h3 className="wid-100">Positions Previously Played *</h3>

                    <div className="checkbox-group">
                      {playedPositions.map((pos) => (
                        <label key={pos}>
                          <input
                            type="checkbox"
                            data-group="positionsPlayed"
                            value={pos}
                            checked={form.positionsPlayed.includes(pos)}
                            onChange={handleChange}
                            style={{ marginRight: '5px' }}
                          /> {pos}
                        </label>
                      ))}
                    </div>
                    {errors.positionsPlayed && <span className="error">{errors.positionsPlayed}</span>}
                  </div>

                  <div className="input-container-floating-form wid-50">
                    <h3 className="wid-100">Positions Trying Out For *</h3>

                    <div className="checkbox-group">
                      {tryingPositions.map((pos) => (
                        <label key={pos}>
                          <input
                            type="checkbox"
                            data-group="positionsTrying"
                            value={pos}
                            checked={form.positionsTrying.includes(pos)}
                            onChange={handleChange}
                            style={{ marginRight: '5px' }}
                          /> {pos}
                        </label>
                      ))}
                    </div>
                    {errors.positionsTrying && <span className="error">{errors.positionsTrying}</span>}
                  </div>

                  <div className="input-container-floating-form wid-100">
                    <h3 className="wid-100">Other Tournaments Played *</h3>
                    <div className="checkbox-group">
                      {tournamentsPlayed.map((item) => (
                        <label key={item}>
                          <input
                            type="checkbox"
                            data-group="otherTournaments"
                            value={item}
                            checked={form.otherTournaments.includes(item)}
                            onChange={handleChange}
                            style={{ marginRight: '5px' }}
                          /> {item}
                        </label>
                      ))}

                      <label>
                        <input
                          type="checkbox"
                          name="showOtherLeagues"
                          checked={form.showOtherLeagues}
                          onChange={handleChange}
                          style={{ marginRight: '5px' }}
                        /> Other Leagues
                      </label>
                    </div>
                    {errors.otherTournaments && <span className="error">{errors.otherTournaments}</span>}
                    {form.showOtherLeagues && (
                      <div style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <div className="input-container-floating-form wid-50">
                          <label>League Name 1</label>
                          <input
                            type="text"
                            value={form.otherLeagues[0].leagueName}
                            onChange={(e) => {
                              const updated = [...form.otherLeagues];
                              updated[0].leagueName = e.target.value;
                              setForm({ ...form, otherLeagues: updated });
                            }}
                          />
                        </div>
                        <div className="input-container-floating-form wid-50">
                          <label>Year</label>
                          <input
                            type="text"
                            value={form.otherLeagues[0].year}
                            onChange={(e) => {
                              const updated = [...form.otherLeagues];
                              updated[0].year = e.target.value;
                              setForm({ ...form, otherLeagues: updated });
                            }}
                          />
                        </div>

                        <div className="input-container-floating-form wid-50">
                          <label>League Name 2</label>
                          <input
                            type="text"
                            value={form.otherLeagues[1].leagueName}
                            onChange={(e) => {
                              const updated = [...form.otherLeagues];
                              updated[1].leagueName = e.target.value;
                              setForm({ ...form, otherLeagues: updated });
                            }}
                          />
                        </div>
                        <div className="input-container-floating-form wid-50">
                          <label>Year</label>
                          <input
                            type="text"
                            value={form.otherLeagues[1].year}
                            onChange={(e) => {
                              const updated = [...form.otherLeagues];
                              updated[1].year = e.target.value;
                              setForm({ ...form, otherLeagues: updated });
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="wid-100">Parent/Guardian Details {(form.category === "Junior Men" || form.category === "Junior Women") ? "*" : "(Optional)"}:</h3>
                  {[
                    { label: "Parent/Guardian First Name", name: "guardianFirstName" },
                    { label: "Parent/Guardian Last Name", name: "guardianLastName" },
                    { label: "Parent/Guardian Email", name: "guardianEmail", type: "email" },
                    { label: "Parent/Guardian Phone", name: "guardianPhone", type: "tel" },
                  ].map(({ label, name, type = "text" }) => (
                    <div key={name} className="input-container-floating-form wid-50">
                      <label>
                        {label}
                        {(form.category === "Junior Men" || form.category === "Junior Women") && " *"}
                      </label>
                      <input type={type} name={name} value={form[name]} onChange={handleChange} />
                      {errors[name] && <span className="error">{errors[name]}</span>}
                    </div>
                  ))}
                </div>

                  <div className="form-btn-container">
                            <Turnstile
                              siteKey={`${turnstileSiteKey}`} // replace with your Cloudflare site key
                              onSuccess={(token) => setCaptchaToken(token)}
                              onError={() => setCaptchaToken("")}
                            />
                          </div>

                <div className="form-btn-container">
                  <button type="submit">Register Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
