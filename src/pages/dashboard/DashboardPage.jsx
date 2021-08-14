import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import WeeklySchedule from '../../components/WeeklySchedule/WeeklySchedule';


function DashboardPage({userRole, classes}) {
    console.log("dashboard", classes)
  return (
    <div className="p-dashboard">
      <Container> <WeeklySchedule userRole={userRole} classes={classes}/></Container>

      {/* <Modal show={showClassAddModal} onHide={()=> setShowClassAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShowClassAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> setShowClassAddModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default DashboardPage;
