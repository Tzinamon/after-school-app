import { useState } from "react";
import { Modal, Button, Form, Col, Row, controlId} from "react-bootstrap";
import "./NewClassModal.css";

function NewClassModal({show, onClose, onCreate}) {
        
    const [className, setClassName] = useState("");
    const [classInstructor, setClassInstructor] = useState("");
    const [classDesc, setClassDesc] = useState("");
    const [classRoom, setClassRoom] = useState ("");
    const [classPrice, setClassPrice] = useState ("");
    const [classDay, setClassDay] = useState("");
    const [classTime, setClassTime] = useState("");

    function clearForm(){
      setClassName("");
      setClassInstructor("");
      setClassDesc("");
      setClassRoom("");
      setClassPrice("");
      setClassDay("");
      setClassTime("");
    }

    function createClass(){
        onCreate(className, classInstructor, classDesc, classRoom, classPrice, classDay, classTime);
        clearForm();
        onClose();
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

  {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalInst">
    <Form.Label column sm={4}>
      שם המדריכ/ה
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classInstructor} onChange={e=>setClassInstructor(e.target.value)} />
    </Col>
  </Form.Group> */}

  {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalDesc">
    <Form.Label column sm={4}>
      תיאור החוג
    </Form.Label>
    <Col sm={8}>
      <Form.Control as="textarea" rows={3} value={classDesc} onChange={e=>setClassDesc(e.target.value)} />
    </Col>
  </Form.Group> */}

  {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalLoc">
    <Form.Label column sm={4}>
      היכן מתקיים
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classRoom} onChange={e=>setClassRoom(e.target.value)}  />
    </Col>
  </Form.Group> */}

  {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
    <Form.Label column sm={4}>
      מחיר לחודש
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classPrice} onChange={e=>setClassPrice(e.target.value)}/>
    </Col>
  </Form.Group> */}

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalDay">
    <Form.Label column sm={4}>
          יום
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" value={classDay} onChange={e=>setClassDay(e.target.value)}/>
    </Col>
  </Form.Group>

  {/* <Form.Group>
  <Form.control value={classDay} onSelect={e=>setClassDay(e.target.value)}>
    <option>יום פעילות</option>
    <option value="ראשון">ראשון</option>
    <option value="שני">שני</option>
    <option value="שלישי">שלישי</option>
    <option value="רביעי">רביעי</option>
    <option value="חמישי">חמישי</option>
    <option value="שישי">שישי</option>
  </Form.control >
  <br />
  </Form.Group> */}

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
        <Button variant="primary" onClick={createClass}>
          שמירה
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewClassModal;
