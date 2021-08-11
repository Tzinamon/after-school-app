import React from "react";
import { Col } from "react-bootstrap";
import Day from "../Day/Day";
import "./WeeklySchedule.css";

function WeeklySchedule({ userRole, classes }) {
  return (
    <div className="w-row">
      <Col md={2} sm={6}>
        <Day userRole={userRole} classes={classes} weekday={"ראשון"} />
      </Col>
      <Col md={2} sm={6}>
        <Day userRole={userRole} classes={classes} weekday={"שני"} />
      </Col>
      <Col md={2} sm={6}>
        <Day userRole={userRole} classes={classes} weekday={"שלישי"} />
      </Col>
      <Col md={2} sm={6}>
        <Day userRole={userRole} classes={classes} weekday={"רביעי"} />
      </Col>
      <Col md={2} sm={6}>
        <Day userRole={userRole} classes={classes} weekday={"חמישי"} />
      </Col>
      <Col md={2} sm={6}>
        <Day userRole={userRole} classes={classes} weekday={"שישי"} />
      </Col>
    </div>
  );
}

export default WeeklySchedule;
