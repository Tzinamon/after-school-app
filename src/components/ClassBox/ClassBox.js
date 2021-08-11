import React, { useState } from "react";
import ClassCard from "../ClassCard/classcard";
import "./ClassBox.css";

function ClassBox({ classes, Class }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div>
      <div key={Class.classid} className="default-box">
        <div>{Class.schedule[0].time}</div>
        {Class.cname}
      </div>
      <div>
        <ClassCard Class={Class} />
      </div>
    </div>
  );
}

export default ClassBox;
