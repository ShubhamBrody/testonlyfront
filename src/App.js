/* eslint-disable import/no-anonymous-default-export */
// import classes from './App.module.css';

import HomeRoute from './components/Home-Route/HomeMain';
import SignInRoute from './components/AdminSignIn-Route/SignInMain';
import PartnersRoute from './components/Partners-Route/PartnersMain';
import EventsRoute from './components/Events-Route/EventsMain'
import MissionMillion from './components/Projects-Route/MissionMillion/MissionMillion';
import MissionRedDot from './components/Projects-Route/MissionRedDot/MissionRedDot'
import MissionOmega from './components/Projects-Route/MissionOmega/MissionOmega'
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';



export default () => (
    <BrowserRouter>
    <div>
        <Route exact path='/' component={HomeRoute} />
        <Route path='/signin' component={SignInRoute} />
        <Route path='/partners' component={PartnersRoute} />
        <Route path='/projects/missionmillion' component={MissionMillion} />
        <Route path='/projects/missionreddot' component={MissionRedDot} />
        <Route path='/projects/missionomega' component={MissionOmega} />
        <Route path='/events' component={EventsRoute} />
        <Footer />
    </div>
    </BrowserRouter>
)