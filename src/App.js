import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from './components/login/layout/partials/DefaultLayout';
import Dashboard from './page/Dashboard/Dashboard.page';
import Entry from './page/entry-page';
import { AddTicketPage } from "../src/page/new-ticket/AddTicketPage"
import { TicketLists } from "../src/page/ticket-list/TicketLists.page";
import Ticket from "../src/page/ticket/Ticket.page";
import PrivateRoute from './components/private-route/PrivateRoute';


function App() {
  return (
    <div className="App">
		<Router>
         <Switch>
          <Route exact path="/">
		  <Entry />
		  </Route>
			  <PrivateRoute  path="/dashboard">
			    <Dashboard />
			  </PrivateRoute>
			  <PrivateRoute  path="/add-ticket">
			    <AddTicketPage />
			  </PrivateRoute>
              <PrivateRoute   path="/tickets">
			    <TicketLists />
			  </PrivateRoute>
              <PrivateRoute   path="/ticket/:tId">
			    <Ticket />
			  </PrivateRoute>
		</Switch>
      </Router>
    </div>
  );
};

export default App;
