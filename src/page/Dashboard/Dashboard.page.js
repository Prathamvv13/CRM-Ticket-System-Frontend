import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import {TicketTable} from "../../components/login/TicketTable.comp"
const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Button variant='info' style={{fontSize: "2rem", padding: "10px 30px"}}>Add new Ticket</Button>
            </Col>
        </Row>
        <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets:50</div>
          <div>Pending tickets:10</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable/>
        </Col>
      </Row>     
    </Container>
  );
};

export default Dashboard
