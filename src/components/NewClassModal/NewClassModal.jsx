import { useState } from "react";
import { Modal, Button, Form, Col, Row, FloatingLabel } from "react-bootstrap";
import "./NewClassModal.css";

function NewClassModal({show, onClose}) {
        
    const [className, setClassName] = useState("");
    const [classInstructor, setClassInstructor] = useState("");
    const [classDesc, setClassDesc] = useState("");
    const [classRoom, setClassRoom] = useState ("");
    const [classPrice, setClassPrice] = useState ("");
    const [classDay, setClassDay] = useState("");
    const [classTime, setClassTime] = useState("");

    function CreateClass(){
        console.log(className, classInstructor, classDesc, classRoom, classPrice, classDay, classTime);

    }



  return (
    <Modal show={show} onHide={onClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title>הוספת חוג חדש</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
    <Form.Label column sm={4}>
      שם החוג
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={className} onChange={e=>setClassName(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalInst">
    <Form.Label column sm={4}>
      שם המדריכ/ה
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classInstructor} onChange={e=>setClassInstructor(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalDesc">
    <Form.Label column sm={4}>
      תיאור החוג
    </Form.Label>
    <Col sm={8}>
      <Form.Control as="textarea" rows={3} value={classDesc} onChange={e=>setClassDesc(e.target.value)} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalLoc">
    <Form.Label column sm={4}>
      היכן מתקיים
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classRoom} onChange={e=>setClassRoom(e.target.value)}  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
    <Form.Label column sm={4}>
      מחיר לחודש
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classPrice} onChange={e=>setClassPrice(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group>
  <Form.Select controlId="formHorizontalDay">
    <option>יום פעילות</option>
    <option value="1">ראשון</option>
    <option value="2">שני</option>
    <option value="3">שלישי</option>
    <option value="4">רביעי</option>
    <option value="5">חמישי</option>
    <option value="6">שישי</option>
  </Form.Select >
  <br />
  </Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formHorizontalTime">
    <Form.Label column sm={4}>
      שעת הפעילות
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classTime} onChange={e=>setClassTime(e.target.value)}/>
    </Col>
  </Form.Group>
  
 
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          סגירה
        </Button>
        <Button variant="primary" onClick={CreateClass}>
          שמירה
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewClassModal;
