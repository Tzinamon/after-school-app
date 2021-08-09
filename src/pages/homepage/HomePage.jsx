import React from 'react';
import { Container } from 'react-bootstrap';
import WeeklySchedule from '../../components/WeeklySchedule/WeeklySchedule';

function HomePage({userRole, classes}) {
    return (
        <div className="p-home">
            <Container>
                <WeeklySchedule userRole={userRole} classes={classes}/>
            </Container>
        </div>
    );
}

export default HomePage;