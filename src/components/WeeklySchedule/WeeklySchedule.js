import React from "react";
import Day from "../Day/Day";

function WeeklySchedule(props) {
  return (
    <div className= "w-row">
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
    </div>
  );
}

export default WeeklySchedule;
