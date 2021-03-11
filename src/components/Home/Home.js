import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div style={{ backgroundColor: '#15151b' }}>
            <div className="headerImgOverlay">
                <div className="headerImg">
                    <h1 className="headerTitle">UEFA Champions League</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Team team={team}></Team>)
                     }
                </div>
            </div>
        </div>
    );
};

export default Home;