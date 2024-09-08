import React, {useState, useEffect} from 'react';
import '../../page/entry-style.css'
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
export const  LoginForm = ({handleOnchange,handleOnsubmit,FormSwitcher,email,pass}) => {

  return (
    <div>
<Row className="w-100">
        <Col md={14} lg={14} className="mx-auto">
          <div className="outer-card">
            <Card className="shadow p-4">
              <Card.Img
                variant="top"
                src="./images/crm logo.png"
                className="rounded-circle mx-auto d-block mb-4"
                style={{ width: '500x', height: '100px' }}
              />
              <Card.Body>
                <h3 className="text-center mb-4"> Client Login</h3>
                <Form autoComplete='off' onSubmit={handleOnsubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleOnchange} placeholder="Enter email"  required/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={pass} onChange={handleOnchange} placeholder="Password" required />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted" > <a href="#"  onClick={()=> FormSwitcher("reset")}>Forgot password?</a></small>
              </Card.Footer>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};
LoginForm.propTypes= {
    handleOnchange: PropTypes.func.isRequired,
    handleOnsubmit:PropTypes.func.isRequired,
    FormSwitcher:PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
};