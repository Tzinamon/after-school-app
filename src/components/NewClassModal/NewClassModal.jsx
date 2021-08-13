import React from "react";
import { Modal, Button, Form, Col, Row, FloatingLabel } from "react-bootstrap";

function NewClassModal({show, onClose}) {
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
      <Form.Control type="text"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalInst">
    <Form.Label column sm={4}>
      שם המדריכ/ה
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalDesc">
    <Form.Label column sm={4}>
      תיאור החוג
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalLoc">
    <Form.Label column sm={4}>
      היכן מתקיים
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
    <Form.Label column sm={4}>
      מחיר לחודש
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="password"/>
    </Col>
  </Form.Group>

  <FloatingLabel controlId="floatingSelect">
  <Form.Select aria-label="Floating label select example">
    <option>יום פעילות</option>
    <option value="1">ראשון</option>
    <option value="2">שני</option>
    <option value="3">שלישי</option>
    <option value="3">רביעי</option>
    <option value="3">חמישי</option>
    <option value="3">שישי</option>
  </Form.Select>
</FloatingLabel>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          סגירה
        </Button>
        <Button variant="primary" onClick={onClose}>
          שמירה
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewClassModal;
