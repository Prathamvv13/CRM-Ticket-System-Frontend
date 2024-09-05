import React, { useEffect, useState } from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketform';
const initialFrmDt ={
    subject:"",
    issueDate:"",
    Details:"",
};
export const AddTicketPage = () => {
    const [frmData,setfrmData] =useState(initialFrmDt);
    useEffect(()=>{},[frmData]);


const handleOnchange = (e) =>{
    const{name,value}=e.target;
    
    setfrmData({
        ...frmData,
        [name]:value,
    });
};

const handleOnsubmit=(e) =>{
    e.preventDefault()

    console.log("Form submit request received",frmData);
};
  return (
<Container>
    <Row>
        <Col>
         <PageBreadcrumb page="New Ticket"/>
        </Col>
    </Row>

    <Row>
        <Col>
        <AddTicketForm handleOnchange={handleOnchange} handleOnsubmit={handleOnsubmit} frmDt={frmData}/>
        </Col>
    </Row>
</Container>
  );
};
