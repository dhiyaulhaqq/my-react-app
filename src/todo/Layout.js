import React from 'react';
import AppContainer from './containers/AppContainer';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <style scoped>
                    @import "../base.css";
                </style>
                <AppContainer />
            </div>
        )
    }
}

export default Layout;
