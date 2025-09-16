import React from 'react';
import './TeamStandingTable.css';
import image1 from '../../assets/images/Home/Table_logo_1.png'
import image2 from '../../assets/images/Home/Table_logo_1.png'
import image3 from '../../assets/images/Home/Table_logo_1.png'
import image4 from '../../assets/images/Home/Table_logo_1.png'
import image5 from '../../assets/images/Home/Table_logo_1.png'
import image6 from '../../assets/images/Home/Table_logo_1.png'
import image7 from '../../assets/images/Home/Table_logo_1.png'
import image8 from '../../assets/images/Home/Table_logo_1.png'
import arrow from '../../assets/images/Home/Arrow.svg'
import { Link } from 'react-router-dom'

const teams = [
  {
    name: 'SONIPAT STARS',
    image: image1
  },
  {
    name: 'ROHTAK ROYALS',
    image: image2
  },
  {
    name: 'HISAR HEROES',
    image: image3
  },
  {
    name: 'PANIPAT PANTHERS',
    image: image4
  },
  {
    name: 'FARIDABAD FIGHTERS',
    image: image5
  },
  {
    name: 'BHIWANI BULLS',
    image: image6
  },
  {
    name: 'KARNAL KINGS',
    image: image7
  },
  {
    name: 'GURGAON GURU',
    image: image8
  }
];



const TeamStandingTable = () => {
  return (
    <div className="leaderboard-container">
        <div className="container">

            <div className="heading-container">
                  <h2>POINTS TABLE</h2>
                  <Link to={'/standings'}>
                      <span>View More</span>
                      <img src={arrow} alt="Arrow" />
                  </Link>
              </div>

            <table className="leaderboard-table table-striped">
                <thead>
                <tr>
                    <th>POS</th>
                    <th>TEAMS</th>
                    <th>P</th>
                    <th>W</th>
                    <th>L</th>
                    <th>T</th>
                    <th>SCORE DIFF</th>
                    <th>PTS</th>
                    <th>FORM</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team, index) => (
                    <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="trhighlight team-name">
                        <img src={team.image} alt="" />
                        {team.name}
                    </td>
                    <td className="trhighlight">0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td><div className="form-icons">
                        {[...Array(4)].map((_, i) => (
                            <span key={i} className="form-icon trhighlight W">W</span>
                        ))}
                        <span className="form-icon trhighlight L">L</span>
                        </div></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default TeamStandingTable;
