import React, {useState, useEffect} from 'react';
import '../../page/entry-style.css'
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
 const  PasswordReset = ({handleOnchange,handleOnResetsubmit,FormSwitcher,email}) => {
  return (
    <div>
<Row className="w-100">
        <Col md={14} lg={14} className="mx-auto">
          <div className="outer-card">
            <Card className="shadow p-4">
              <Card.Body>
                <h3 className="text-center mb-4"> Forgot Password</h3>
                <Form autoComplete='off' onSubmit={handleOnResetsubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleOnchange} placeholder="Enter email"  required/>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                     Reset Password
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted" > <a href="#" onClick={()=> FormSwitcher("login")}>Go to Login Page</a></small>
              </Card.Footer>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}
PasswordReset.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnResetsubmit: PropTypes.func.isRequired,
    FormSwitcher : PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};

export default PasswordReset;
