import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './Layout';
import Landing from './Landing';
import Brands from './Brands';
import Contact from './Contact';
import Work from './Work';
import Services from './Services';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing}/>
    <Route path="brands" component={Brands}/>
    <Route path="work" component={Work}/>
    <Route path="services" component={Services}/>
    <Route path="contact" component={Contact}/>
  </Route>
);
