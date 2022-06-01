import { Switch, Route } from 'react-router-dom';
import Articles from './Articles';
import Help from './Help';
import NotFound from './NotFound';
import Home from './Home';
import Article from './Article';

function Main() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/articles" exact>
        <Articles />
      </Route>
      <Route path="/articles/:slug" exact>
        <Article />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Main;
