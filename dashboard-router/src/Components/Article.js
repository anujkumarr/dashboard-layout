import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DATA } from './data';


export default class Article extends React.Component {
  render() {
    return (
      <>
        <ul>
          {DATA.map((article) => (
            <div>
              <Link to="/articles">Go back to articles page</Link>
              <h1>The slug of the article is::: {article.slug}</h1>
            </div>
          ))}
        </ul>
      </>
    );
  }
}