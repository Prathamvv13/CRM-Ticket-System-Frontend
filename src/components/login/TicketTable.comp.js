import React from 'react'
import { Table } from "react-bootstrap";
export const TicketTable= () => {
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>1</td>
              <td>2
              </td>
              <td>3</td>
              <td>4</td>
            </tr>
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
      </tbody>
    </Table>
      
    </div>
  );
};
