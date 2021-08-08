import React from 'react';
import { Container } from 'react-bootstrap';
import WeeklySchedule from '../../components/WeeklySchedule/WeeklySchedule';

function HomePage({userRole, Class}) {
    return (
        <div className="p-home">
            <Container>
                <WeeklySchedule userRole={userRole} Class={Class}/>
            </Container>
        </div>
    );
}

export default HomePage;