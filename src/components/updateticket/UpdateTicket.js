import React from 'react'
import {Form,Button} from "react-bootstrap";
import PropTypes from 'prop-types';

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          value={msg}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-4 mb-4">
          <Button variant="primary" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
    
  );
};


UpdateTicket.propTypes = {
  msg:PropTypes.string.isRequired,
  handleOnChange:PropTypes.func.isRequired,
  handleOnSubmit:PropTypes.func.isRequired,
};