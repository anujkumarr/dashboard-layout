import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DATA } from "./data";

export default class Articles extends React.Component {
  render() {
    return (
      <>
        <ul>
          {DATA.map((article) => (
            <div>
              <Link to={`/articles/${article.slug}`}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </div>
          ))}
        </ul>
      </>
    );
 } 
}