import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Male from './image/male.png';
import Female from './image/female.png';
import { useParams } from 'react-router-dom';
import './TeamDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faFlag,faFutbol,faTransgender } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'

const TeamDetail = () => {
    const {idTeam} = useParams()
    const [team, setTeam] = useState([])
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[idTeam])
    const {strTeam, intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strTeamBadge,strTwitter,strWebsite,strYoutube,strStadiumThumb} = team;
    return (
        <div>
            <main>
                <div className="team-banner">
                    <img className="banner-stadium" src={strStadiumThumb} alt=""/>
                    <img className="img-fluid team-banner-img" src={strTeamBadge} alt=""/>
                </div>
            <div className="team-details">
                <div className="container">
                <div className="row teams">
                    <div className="col-md-8 cards">
                        <div className="team-full-details">
                            <h3>{strTeam}</h3>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} />  Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faTransgender} /> Gender: {strGender}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {
                            strGender === 'Male' ? <img className="img-fluid" src={Male} alt="Male Player"/>
                            : <img className="img-fluid" src={Female} alt="Female player"/>
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="clube-details">{strTeam} Club Details</h2>
                        <div className="line"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <p className="description">{strDescriptionEN}</p>
                    </div>
                </div>
                <footer>
                <div className="social-icons">
                <a rel='noreforerr' href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a>
                <a rel='noreforerr' href={`https://${strWebsite}`}><FontAwesomeIcon icon={faFacebook} /></a>
                <a rel='noreforerr' href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <p className="footer-text">&copy; Copyright <a href="https://www.programming-hero.com/">Programming Hero</a> | All rights Reserved</p>
                </footer>
            </div>
            </div>
            
            </main>
        </div>
    );
};

export default TeamDetail;