import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/auth/Login';
import RegistrationForm from './containers/auth/Signup';
import Account from './containers/dashboard/Account';
import Search from './containers/search/Search';
import StaticPage from './containers/static-pages/StaticPage';
import StaticPageDetail from './containers/static-pages/StaticPageDetail';
import NoMatchPage from './containers/no-match/NoMatch';

const BaseRouter = () => (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={RegistrationForm} />
        <Route exact path="/legal" component={StaticPage} />
        <Route exact path="/legal/:slug" component={StaticPageDetail} />
        <Route path="/mon-compte" component={Account} />
        <Route exact path="/" component={Search} />
        <Route path="*" component={NoMatchPage} />          
    </Switch>
)

export default BaseRouter;

/*<Route
path="/mon-compte"
render={({ match: { url } }) => (
    <>
        <Route path={`${url}/`} component={Account} />
        <Route path={`${url}/profil`} component={Profile} />
        <Route path={`${url}/notifications`} component={Notifications} />
        <Route path={`${url}/vos-annonces`} component={Annonces} />
    </>
)} />*/