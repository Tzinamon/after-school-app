import React, { useState } from "react";
import { Button, Card, Tab, Tabs } from "react-bootstrap";

function ClassCard({show, Class}) {
    const [cardTab, setCardTab] = useState ('details');

    let dom;

    if (cardTab ==="details") {
        dom =  show && <div className="c-classcard">
        <Card style={{ width: '18rem' }}> 
            <Tabs id="controlled-tab" activeKey={cardTab} onSelect={(k) => setCardTab(k)} className="mb-3">
                <Tab eventKey= 'details' title = "פרטים"></Tab>
                <Tab eventKey= 'payment' title = "תשלומים"></Tab>
            </Tabs>
          <Card.Body >
          <Card.Title>{Class.cname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {Class.instructor}
          </Card.Subtitle>
          <Card.Subtitle className="mb-3 text-muted">
            {Class.room}
          </Card.Subtitle>
          <Card.Text>{Class.description}</Card.Text>
          <Button variant="primary">פרטים נוספים</Button>
        </Card.Body>
        </Card>
    </div>
      }

      else { //if (cardTab ==="payment") {
        dom = show && <div className="c-classcard">
        <Card style={{ width: '18rem' }}>
          <Tabs id="controlled-tab" activeKey={cardTab} onSelect={(k) => setCardTab(k)} className="mb-3">
                <Tab eventKey= 'details'  title = "פרטים"></Tab>
                <Tab eventKey= 'payment'  title = "תשלומים"></Tab>
            </Tabs>
          <Card.Body >
          <Card.Title>{Class.cname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
                מחיר לחודש 
          </Card.Subtitle>
          <Card.Text>
           חודשים ששולמו
          </Card.Text>
          <Card.Text>חודשים שלא שולמו</Card.Text>
          <Button variant="primary">תשלום</Button>
        </Card.Body>
        </Card>
    </div>
      }


  return dom;

  }
export default ClassCard;
