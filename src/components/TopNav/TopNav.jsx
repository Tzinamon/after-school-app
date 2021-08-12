import React from "react";
import { useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import "./TopNav.css";

function TopNav({AddClass}) {
      const [show, setShow] = useState(false);

  return (
    <div className="t-nav">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#/">חוגים</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="#/">חוגים</Nav.Link>
              <Nav.Link href="#/dashboard">ניהול</Nav.Link>
              <Nav.Item as={Button} onClick={()=>setShow(true)}>
                הוספת חוג
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={()=> setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default TopNav;


  /* <Container>
<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
  <Nav.Item>
    <Nav.Link href="/home">בית</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">מידע</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">עוד משהו</Nav.Link>
  </Nav.Item>
  <Nav.Item as={Button} onClick={()=> modalClick(true)}> 
           הוספת חוג 
  </Nav.Item>
</Nav>
</Container> */

