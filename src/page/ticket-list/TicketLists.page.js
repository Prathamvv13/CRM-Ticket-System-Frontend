import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from "../../components/search-form/SearchForm.comp"
import { TicketTable }  from "../../components/login/TicketTable.comp";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import tickets from "../../data/{} dummy-tickets.json"
export const TicketLists = () => {

  const [str,setStr] = useState("");
  const [dispTicket,setDispTicket] = useState(tickets);

  useEffect(()=>{},{str,dispTicket});

const handleOnChange = e =>{
  const { value } = e.target;
  setStr(value);
  searchTicket(value);
};

const searchTicket = (sttr) =>{
  const displayTickets = tickets.filter((row)=>row.subject.toLowerCase().includes(sttr.toLowerCase())
);
  setDispTicket(displayTickets);
};



  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket Lists" />
            </Col>
        </Row>
 
        <Row className='mt-4'>
        <Col>
        <Link to="add-ticket">
        <Button variant="primary"> Add New Ticket</Button>
        </Link>
        
        </Col>
        <Col className="d-flex justify-content-end">  <SearchForm  handleOnChange={handleOnChange} str={str}/> </Col>
        </Row>
        
        <hr />

        <Row>
            <Col>
            <TicketTable tickets={dispTicket} />
            </Col>
        </Row>

        
    </Container>
  );
};
