import React from 'react';
import './App.css';
import Cart from './Cart'
import Listitems from './Listitems';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <center>
        <Router>
          <Route exact path="/" component={Cart}></Route>
          <Route path="/listitems" component={Listitems}></Route>
        </Router>
      </center>
    </div>
  );
}

export default App;
