import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

const Team = (props) => {
        const {strTeamBadge, strTeam, strSport, idTeam} = props.team
        const  history = useHistory();
        const  handleTeam = (idTeam) => {
        const url = `/team/${idTeam}`
        history.push(url);
    }
    return (
        <div className="teamContent">
        <div className="col-md-4">
<Card className="cardBody">
                <Card.Img className="cardImg img-fluid" variant="top" src={strTeamBadge} />
            <Card.Body>
            <Card.Title className="card-title">{strTeam}</Card.Title>
            <Card.Text>
            <p className="sports">Sports Type: {strSport}</p>
            </Card.Text>
            <Button onClick={() => handleTeam(idTeam)}>Explore  <FontAwesomeIcon icon={faArrowRight} /> </Button>
        </Card.Body>
</Card>
                    </div>
                </div>
    );
};

export default Team;