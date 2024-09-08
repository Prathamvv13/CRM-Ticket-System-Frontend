import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import MessageHistory from '../../components/message-history/MessageHistory.comp'
import tickets from "../../data/{} dummy-tickets.json";
import {UpdateTicket} from "../../components/updateticket/UpdateTicket";
const ticket=tickets[0]
const Ticket = () => {
    const [message,setmessage] = useState("");
    useEffect(()=>{

    },{message})
    const handleOnChange = (e) =>{
        setmessage(e.target.value);

    };
    const handleOnSubmit =()=>{
        alert("Form is submitted !");
    }

  return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                <div className="subject">Subject:{ticket.subject}</div>
                <div className="date">Date:{ticket.addedAt}</div>
                <div className="status">Status:{ticket.status}</div>
                </Col>
                <Col className="text-right">
                <Button variant="primary">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                <MessageHistory msg={ticket.history}/>
                </Col>
            </Row>
            
            <hr />

            <Row className='mt-4'>
                <Col>
                <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>

        </Container>
      
  );
};

export default Ticket
