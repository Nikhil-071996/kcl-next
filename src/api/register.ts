import { post } from "./axios";


export const submitRegisterForm = async (data: any, captchaToken: any) => {
    // const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    const response = await post('/form-submissions', {
        "cf-turnstile-response": captchaToken,
        "formId": 2,
        "submissionData": data,
    });


    return response;
}

export const submitContactForm = async (data: any, captchaToken: any) => {
    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const response = await post('/form-submissions', {
        "cf-turnstile-response": captchaToken,
        "formId": 1,
        "submissionData": data,
    });


    return response;
}
