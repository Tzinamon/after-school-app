import React, { useState } from "react";
import ClassCard from "../ClassCard/ClassCard";
import "./ClassBox.css";

function ClassBox({ Class, userRole , showInfo}) {
  const [showCard, setShowCard] = useState(false);
  let classType;
  
  if (userRole === -1) 
    {
    if (Class.participantName === "רועי") 
      {
      classType = "user-box-child1";
      }
    else if (Class.participantName === "עידו") 
      {
      classType = "user-box-child2";
      }
    else 
      {
      classType = "user-box";
      }
    } 

  if (userRole === 1 && showInfo === "collection")
     {
      if (Class.Collection === 2) 
        {
        classType = "admin-box-red";
        }
      else if (Class.Collection === 1) 
        {
        classType = "admin-box-yellow";
        } 
      else 
        {
        classType = "admin-box-green";
        }
      } 
  if (userRole === 1 && showInfo === "signup")
     {
      if (Class.signedUp === 2) 
        {
        classType = "admin-box-red";
        }
      else if (Class.signedUp === 1) 
        {
        classType = "admin-box-yellow";
        } 
      else 
        {
        classType = "admin-box-green";
        }
     } 
 if (userRole === 1 && showInfo === "attendance")
     {
     if (Class.attendance === 2) 
       {
        classType = "admin-box-red";
       }
     else if (Class.attendance === 1) 
       {
      classType = "admin-box-yellow";
       } 
       else 
        {
        classType = "admin-box-green";
        }
    }
  
  
    
    

  return (
    <div className="c-box">
      <button
        onClick={() => setShowCard(!showCard)}
        key={Class.classid}
        className={classType}>
        <div>{Class.schedule[0].time}</div>
        {Class.cname}
      </button>
      <div className="c-card">
        <ClassCard show={showCard} Class={Class} />
      </div>
    </div>
  );
}

export default ClassBox;
