import React from "react";
import { Col, Row } from "react-bootstrap";
import Day from "../Day/Day";
import "./WeeklySchedule.css";

function WeeklySchedule({userRole, classes }) {
  console.log(classes);
  return (
    <Row  className="w-row">
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"ראשון"} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"שני"} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"שלישי"} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"רביעי"} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"חמישי"} />
      </Col>
      <Col md={2} sm={12}>
        <Day userRole={userRole} classes={classes} weekday={"שישי"} />
      </Col>
    </Row>
  );
}

export default WeeklySchedule;
