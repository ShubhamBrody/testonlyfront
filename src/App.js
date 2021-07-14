/* eslint-disable import/no-anonymous-default-export */
// import classes from './App.module.css';

import HomeRoute from './components/Home-Route/HomeMain';
import SignInRoute from './components/AdminSignIn-Route/SignInMain';
import PartnersRoute from './components/Partners-Route/PartnersMain';
import EventsRoute from './components/Events-Route/EventsMain'
import ProjectsRoute from './components/Projects-Route/ProjectsMain';
import {BrowserRouter, Route} from 'react-router-dom';



export default () => (
    <BrowserRouter>
    <div>
        <Route exact path='/' component={HomeRoute} />
        <Route path='/signin' component={SignInRoute} />
        <Route path='/partners' component={PartnersRoute} />
        <Route path='/projects' component={ProjectsRoute} />
        <Route path='/events' component={EventsRoute} />
    </div>
    </BrowserRouter>
)