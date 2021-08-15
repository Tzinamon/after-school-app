import React from "react";
import { Col, Row } from "react-bootstrap";
import Day from "../Day/Day";
import "./WeeklySchedule.css";

function WeeklySchedule({userRole, classes, showInfo}) {
  console.log(classes);
  return (
    <Row  className="w-row">
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"ראשון"} showInfo={showInfo} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"שני"} showInfo={showInfo} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"שלישי"} showInfo={showInfo} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"רביעי"} showInfo={showInfo} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"חמישי"} showInfo={showInfo}/>
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"שישי"} showInfo={showInfo}/>
      </Col>
    </Row>
  );
}

export default WeeklySchedule;
