import React from 'react';
import {Row} from 'react-bootstrap';
import './Day.css';
import ClassBox from '../ClassBox/ClassBox';

function Day({userRole, classes, weekday}) {
    let dayClasses = classes.filter(Class => {
            const a = Class.schedule.find(dayandtime => {
              return  dayandtime.day === weekday});                
        return a !== undefined}); 
       
        console.log(dayClasses);

    return (
        <div className="d-column">
            <div className= "d-title">{weekday}</div>
            {dayClasses.map(Class => 
        <ClassBox Class={Class} userRole={userRole}/>
            )}
        </div>
    );
}



export default Day;