import React from 'react';
import {Row} from 'react-bootstrap';
import './Day.css';
import ClassBox from '../ClassBox/ClassBox';

function Day({userRole, classes, weekday}) {
    let dayClasses = classes.filter(Class => {
            const a = Class.schedule.find(dayandtime => {
              return  dayandtime.day === weekday});
                
        return a !== undefined}); 

    return (
        <div>
            <div className= "d-title">{weekday}</div>
            {dayClasses.map(Class => 
        <Row className = "d-box" ><ClassBox Class={Class}/></Row>
            )}
        </div>
    );
}



export default Day;