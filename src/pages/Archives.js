import React from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Nav from '../components/NavArchives';
import Article from '../components/Article';

function Archives() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Nav url={url}/>
            <Switch>
                <Route exact path={path}>
                    <h1>Please select an archive.</h1>
                </Route>
                <Route path={`${path}/:archiveId`}>
                    <Archive />
                </Route>
            </Switch>
        </div>
    )
}

function Archive() {
    // The <Route> that rendered this component has a
    // path of `/archives/:archiveId`. The `:archiveId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { archiveId } = useParams();

    return (
        <div>
            <h3>{archiveId}</h3>
        </div>
    );
}

export default Archives;
