// import logo from './logo.svg';
import './App.css';
import DefaultLayout from './components/login/layout/partials/DefaultLayout';
import Dashboard from './page/Dashboard/Dashboard.page';
// import {Button} from "react-bootstrap";  
import Entry from './page/entry-page';
import { AddTicketPage } from "../src/page/new-ticket/AddTicketPage"
import { TicketLists } from "../src/page/ticket-list/TicketLists.page";
import Ticket from "../src/page/ticket/Ticket.page";


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        {/* <TicketLists/> */}
      {/* <AddTicketPage /> */}
      <Ticket />
      </DefaultLayout>
        {/* <Dashboard/> */}
    </div>
  );
}

export default App;
