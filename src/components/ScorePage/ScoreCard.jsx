import React, { useState } from 'react'
import ScoreCardTable from './ScoreCardTable';
import './scorecard.css'

function ScoreCard() {

  const [activeTab, setActiveTab] = useState('team1');

  const playersData = {
  starting: [
    {
      inOut: "in",
      name: "Abhijeet Malik",
      jersey: 8,
      role: "Raider",
      stats: {
        successfulRaids: 12,
        unsuccessfulRaids: 5,
        touchPoints: 14,
        bonusPoints: 3,
        raidPoints: 17,
        superRaids: 2,
        successfulTackles: 0,
        unsuccessfulTackles: 0,
        tacklePoints: 0,
        superTackles: 0,
        totalPoints: 17,
      },
    },
    {
      inOut: "in",
      name: "Shivam Kumar",
      jersey: 44,
      role: "Defender",
      stats: {
        successfulRaids: 0,
        unsuccessfulRaids: 0,
        touchPoints: 0,
        bonusPoints: 0,
        raidPoints: 0,
        superRaids: 0,
        successfulTackles: 0,
        unsuccessfulTackles: 0,
        tacklePoints: 0,
        superTackles: 0,
        totalPoints: 0,
      },
    },
  ],
  substitutes: [
    {
      inOut: "sub",
      name: "Vishwas Baliyan",
      jersey: 14,
      role: "All-Rounder",
      stats: {
        successfulRaids: 0,
        unsuccessfulRaids: 0,
        touchPoints: 0,
        bonusPoints: 0,
        raidPoints: 0,
        superRaids: 0,
        successfulTackles: 0,
        unsuccessfulTackles: 0,
        tacklePoints: 0,
        superTackles: 0,
        totalPoints: 0,
      },
    },
  ],
};

const playersData2 = {
  starting: [
    {
      inOut: "in",
      name: "Arjun Deshwal",
      jersey: 8,
      role: "Raider",
      stats: {
        successfulRaids: 12,
        unsuccessfulRaids: 5,
        touchPoints: 14,
        bonusPoints: 3,
        raidPoints: 17,
        superRaids: 2,
        successfulTackles: 0,
        unsuccessfulTackles: 0,
        tacklePoints: 0,
        superTackles: 0,
        totalPoints: 17,
      },
    },
    {
      inOut: "in",
      name: "Arpit Saroha",
      jersey: 44,
      role: "Defender",
      stats: {
        successfulRaids: 0,
        unsuccessfulRaids: 0,
        touchPoints: 0,
        bonusPoints: 0,
        raidPoints: 0,
        superRaids: 0,
        successfulTackles: 0,
        unsuccessfulTackles: 0,
        tacklePoints: 0,
        superTackles: 0,
        totalPoints: 0,
      },
    },
  ],
  substitutes: [
    {
      inOut: "sub",
      name: "Suraj Tomar",
      jersey: 14,
      role: "All-Rounder",
      stats: {
        successfulRaids: 0,
        unsuccessfulRaids: 0,
        touchPoints: 0,
        bonusPoints: 0,
        raidPoints: 0,
        superRaids: 0,
        successfulTackles: 0,
        unsuccessfulTackles: 0,
        tacklePoints: 0,
        superTackles: 0,
        totalPoints: 0,
      },
    },
  ],
};


  return (
    <div className='score-card-section'>
      <div className="container">

      <div className="fixtures-buttons-container" style={{marginTop : '50px', marginBottom : '50px'}}>

              <button
                onClick={() => setActiveTab('team1')}
                className={`${activeTab === 'team1'
                    ? 'active'
                    : ''
                  }`}
              >
                SONIPAT STARS
              </button>
              <button
                onClick={() => setActiveTab('team2')}
                className={`${activeTab === 'team2'
                    ? 'active'
                    : ''
                  }`}
              >
                ROTHAK ROYALS
              </button>
              
            </div>



                {activeTab === 'team1' && <ScoreCardTable playersData={playersData}/>}
                {activeTab === 'team2' && <ScoreCardTable playersData={playersData2}/>}

      </div>
    </div>
  )
}

export default ScoreCard