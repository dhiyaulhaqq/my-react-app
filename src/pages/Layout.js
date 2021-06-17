import React from 'react';
import { HashRouter as Router, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import Nav from '../components/NavBootstrap';
import ArchivesPage from './Archives';
import FeaturedPage from './Featured';
import SettingsPage from './Settings';

function Layout(){
    return (
        <Router>
            <div>
                {/* <Nav /> */}
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/archives">
                        <Archives />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/">
                        <Featured />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function getLocationPathName(){
    const history = useHistory();
    const { pathname } = history.location;
    return pathname;
}

function Featured(){
    const pathname = getLocationPathName();
    return (
        <div>
            <Nav pathname={pathname} />
            <FeaturedPage />
        </div>
    )
}

function Archives() {
    const pathname = getLocationPathName();
    return (
        <div>
            <ArchivesPage />
        </div>
    )
}

function Settings(){
    const pathname = getLocationPathName();
    return (
        <div>
            <Nav pathname={pathname} />
            <SettingsPage />
        </div>
    )
}

export default Layout;
