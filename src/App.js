// import logo from './logo.svg';
import './App.css';
import DefaultLayout from './components/login/layout/partials/DefaultLayout';
import Dashboard from './page/Dashboard/Dashboard.page';
// import {Button} from "react-bootstrap";  
import Entry from './page/entry-page';


function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        <Dashboard/>
      </DefaultLayout>
    </div>
  );
}

export default App;
