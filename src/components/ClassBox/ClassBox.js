import React, { useState } from "react";
import ClassCard from "../ClassCard/ClassCard";
import "./ClassBox.css";

function ClassBox({classes, Class }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div >
      <button onClick={()=>setShowCard(!showCard)} key={Class.classid} className="default-box">
        <div>{Class.schedule[0].time}</div>
        {Class.cname}
      </button>
      <div className = "c-card">
        <ClassCard show={showCard} Class={Class}/>
      </div>
    </div>
  );
}

export default ClassBox;
