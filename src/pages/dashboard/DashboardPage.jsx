import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import WeeklySchedule from '../../components/WeeklySchedule/WeeklySchedule';


function DashboardPage({userRole, classes, showInfo}) {
    console.log("dashboard", classes)
  return (
    <div className="p-dashboard">
      <Container> <WeeklySchedule userRole={userRole} classes={classes} showInfo={showInfo}/></Container>


    </div>
  );
}

export default DashboardPage;
