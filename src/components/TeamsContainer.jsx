"use client"
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; 
import "@/assets/styles/CardSlider.css";
import "../assets/styles/teams-container.css"

import Team1 from '/public/images/Home/logos/bhiwani_bulls.png'
import Team2 from '/public/images/Home/logos/faridabad_fighters.png'
import Team3 from '/public/images/Home/logos/gurgaon_gurus.png'
import Team4 from '/public/images/Home/logos/hisar_heros.png'
import Team5 from '/public/images/Home/logos/karnal_kings.png'
import Team6 from '/public/images/Home/logos/panipat_panthers.png'
import Team7 from '/public/images/Home/logos/rohatak_royals.png'
import Team8 from '/public/images/Home/logos/sonipat_star.png'
import arrow from '/public/images/Home/Arrow.svg'

export default function TeamsContainer() {
  const teamCardsRef = useRef()

  const teams = [Team7, Team4, Team1, Team2, Team8, Team3, Team6, Team5]

  return (
    <div className='team-container'>
      <div className="container">
        <div className="heading-container">
          <h2>TEAMS</h2>
          <Link href="/team" passHref>
              <span>View More</span>
              <Image src={arrow} alt="Arrow" />
          </Link>
        </div>

        <Splide
          ref={teamCardsRef}
          options={{
            type: "loop",
            pagination: false,
            drag: "free",
            arrows: false,
            perPage: 5,
            perMove: 1,
            autoplay: true,
            interval: 1000,
            snap: true,
            gap: '16px',
            breakpoints: {
              1300: { perPage: 4 },
              1024: { perPage: 3 },
              560: { perPage: 2 },
              460: { perPage: 2 },
              320: { perPage: 2 },
            },
          }}
        >
          {teams.map((team, index) => (
            <SplideSlide key={index}>
              <Link href="/team-page" className="team-card">
                  <Image src={team} alt={`Team ${index + 1}`} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}
