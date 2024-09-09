import React from 'react';
import {Card,Form,Button} from "react-bootstrap";
import PropTypes from 'prop-types';

export const AddTicketForm = ({handleOnsubmit,handleOnchange,frmDt}) => {
    console.log(frmDt)
  return (
    <Card className="shadow p-4">
              <Card.Body>
                <h1 className="text-info text-center mb-4">Add New Ticket</h1>
                <Form autoComplete='off' onSubmit={handleOnsubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control  name="subject" value={frmDt.subject} onChange={handleOnchange} placeholder="Write Subject"  required/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control type="date" name="issueDate" value={frmDt.issueDate}  onChange={handleOnchange} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Issue Details</Form.Label>
                    <Form.Control as="textarea" name="Details" rows="5" value={frmDt.Deails} onChange={handleOnchange} required />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Add Ticket
                  </Button>
                  
                </Form>
              </Card.Body>
            </Card>
  );
};

AddTicketForm.propTypes ={
    handleOnchange:PropTypes.func.isRequired,
    handleOnsubmit:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
};