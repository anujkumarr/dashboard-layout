import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <Link to={'/articles'}>Articles</Link>
      <span>------</span>
      <Link to={'/help'}>Help</Link>
    </div>
  );
}

export default Home;
