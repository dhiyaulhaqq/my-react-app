import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            collapse: true
        }
    }

    toggleCollapse(){
        const collapse = !this.state.collapse;
        this.setState({ collapse })
    }

    render() {
        const collapse = this.state.collapse ? "collapse" : "" ;

        const { pathname } = this.props;

        const activeFeatured = pathname === '/' ? 'active' : '' ;
        const activeArchives = pathname === '/archives' ? 'active' : '' ;
        const activeSettings = pathname === '/settings' ? 'active' : '' ;

        return (
            <nav class="navbar navbar-inverse navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button
                            type="button"
                            class="navbar-toggle"
                            onClick={this.toggleCollapse.bind(this)}
                        >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link class="navbar-brand" to="/">
                            React Tutorial
                        </Link>
                    </div>
                    <div id="navbar" class={"navbar-collapse " + collapse}>
                        <ul class="nav navbar-nav navbar-right">
                            <li class={activeFeatured} >
                                <Link to="/">Home</Link>
                            </li>
                            <li class={activeArchives} >
                                <Link to="/archives">Archives</Link>
                            </li>
                            <li class={activeSettings} >
                                <Link to="/settings">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
