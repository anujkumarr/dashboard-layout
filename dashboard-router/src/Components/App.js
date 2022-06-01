import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Sidebar } from "./Sidebar";
import Main from "./Main";

function App() {
  return (
    <div>
      <Router>
        <div style={{display:"flex"}}>
          <Sidebar />
          <Main />
        </div>
      </Router>
    </div>
  );
}

export default App;