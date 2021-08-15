import { useState } from "react";
import "./TopNav.css";
import logo from "./appleclasses.jpg";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NewClassModal from "../NewClassModal/NewClassModal";


function TopNav({userRole, onAddClass, switchUser}) {
      const [isShown, setIsShown] = useState(false);

      const [showCollection, setShowCollection] = useState(false);

  return (
    <div className="t-nav">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={()=>switchUser()}>      
          <img
        src={logo}
        width="100"
        className="d-inline-block align-top"
        alt=""/>
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              {userRole === 1 ? null :<Nav.Link href="#/">החוגים של רועי ועידו</Nav.Link>}
              {userRole === 1 ? <Nav.Link href="#/dashboard">ניהול</Nav.Link> : null}
              {userRole === 1 ? <Nav.Item as={Button} onClick={()=>setIsShown(true)}>הוספת חוג</Nav.Item> :null}
              {userRole === 1 ? <Nav.Item as={Button} onClick={()=>setShowCollection(true)}>מצב גבייה</Nav.Item> :null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <NewClassModal show={isShown} onClose={() => setIsShown(false)} onCreate={onAddClass}/>
    </div>
  );
}
export default TopNav;




