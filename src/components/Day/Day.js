import React from 'react';
import './Day.css';
import ClassBox from '../ClassBox/ClassBox';

function Day({userRole, classes, weekday}) {

    const classBoxes = classes.map(Class => 
        <ClassBox Class={Class}/>
      );
    return (
        <div>
            <div className= "d-title">{weekday}</div>
            <div>{classBoxes}</div>
        </div>
    );
}

export default Day;