import React from "react";
import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NewClassModal from "../NewClassModal/NewClassModal";
import "./TopNav.css";

function TopNav({onAddClass}) {
      const [isShown, setIsShown] = useState(false);

      

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
              <Nav.Item as={Button} onClick={()=>setIsShown(true)}>
                הוספת חוג
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <NewClassModal show={isShown} onClose={() => setIsShown(false)} onCreate={onAddClass}/>
    </div>
  );
}
export default TopNav;




