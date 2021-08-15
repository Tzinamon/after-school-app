import { useState } from "react";
import "./TopNav.css";
import logo from "./appleclasses.jpg";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import NewClassModal from "../NewClassModal/NewClassModal";


function TopNav({userRole, onAddClass, switchUser, displayData}) {
      const [isShown, setIsShown] = useState(false);

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
              {userRole === 1 ? null :<div className="nav-user">
                החוגים של
                 <div>רועי</div>
                  <div>ועידו</div>
                </div>}
              {userRole === 1 ? <Nav.Link href="#/dashboard">ניהול</Nav.Link> : null}
              {userRole === 1 ? <Nav.Item as={Button} variant="outline-secondary" size="sm" onClick={()=>setIsShown(true)}>הוספת חוג</Nav.Item> :null}
              {userRole === 1 ? <Nav.Item as={Button} onClick={()=>displayData("collection")}>מצב גבייה</Nav.Item> :null}
              {userRole === 1 ? <Nav.Item as={Button} onClick={()=>displayData("signup")}>מצב רישום</Nav.Item> :null}
              {userRole === 1 ? <Nav.Item as={Button} onClick={()=>displayData("attendance")}>מצב נוכחות</Nav.Item> :null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <NewClassModal show={isShown} onClose={() => setIsShown(false)} onCreate={onAddClass}/>
    </div>
  );
}
export default TopNav;




