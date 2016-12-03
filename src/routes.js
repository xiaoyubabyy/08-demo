import React from 'react';
import { Router,Route,hashHistory,IndexRoute }from 'react-router';
import App from './App';
import Home from './Home';
import Work from './Work';
import About from './About';
import Blog from './Blog';

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='blog' component={Blog} />
          <Route path='work' component={Work} />
          <Route path='about' component={About} />
        </Route>
      </Router>
    )
  }
}

export default Routers;