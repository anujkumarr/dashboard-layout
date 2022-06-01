import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <span>Article</span>
          </Link>
        </li>
        <li>
          <Link to="/help">
            {' '}
            <span>Help and Support</span>{' '}
          </Link>
        </li>
      </ul>
    </aside>
  );
}