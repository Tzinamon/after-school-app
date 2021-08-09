import React from "react";
import Day from "../Day/Day";
import './WeeklySchedule.css';

function WeeklySchedule({userRole, classes}) {
  return (
    <div className= "w-row">
        <Day userRole={userRole} classes={classes} weekday = {"ראשון"}/>
        <Day userRole={userRole} classes={classes} weekday = {"שני"}/>
        <Day userRole={userRole} classes={classes} weekday = {"שלישי"}/>
        <Day userRole={userRole} classes={classes} weekday = {"רביעי"}/>
        <Day userRole={userRole} classes={classes} weekday = {"חמישי"}/>
        <Day userRole={userRole} classes={classes} weekday = {"שישי"}/>
    </div>
  );
}

export default WeeklySchedule;
