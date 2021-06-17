import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            collapse: true,
            expanded: false
        }
    }

    toggleCollapse(){
        const collapse = !this.state.collapse;
        this.setState({ collapse })
    }

    toggleExpanded(){
        const expanded = !this.state.expanded;
        this.setState({ expanded })
    }

    shrinkDropdown(){
        const expanded = false;
        setTimeout(function(){
            this.setState({ expanded });
        }.bind(this), 300)
    }

    render() {
        const collapse = this.state.collapse ? "collapse" : "" ;

        const { url } = this.props;

        const activeFeatured = url === '/' ? 'active' : '' ;
        const activeArchives = url === '/archives' ? 'active' : '' ;
        const activeSettings = url === '/settings' ? 'active' : '' ;

        const navOpen = this.state.expanded ? "open" : "" ;

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
                            <li class={`dropdown ${activeArchives} ${navOpen}`}>
                                <Link onBlur={this.shrinkDropdown.bind(this)} onClick={this.toggleExpanded.bind(this)} class="dropdown-toggle">Archives <span class="caret"></span></Link>
                                <ul class="dropdown-menu">
                                    <li><Link to={`${this.props.url}/action`}>Action</Link></li>
                                    <li><Link to={`${this.props.url}/another-action`}>Another action</Link></li>
                                    <li><Link to={`${this.props.url}/something-else-here`}>Something else here</Link></li>
                                    <li role="separator" class="divider"></li>
                                    <li class="dropdown-header">Nav header</li>
                                    <li><Link to={`${this.props.url}/separated-link`}>Separated link</Link></li>
                                    <li><Link to={`${this.props.url}/one-more-separated-link`}>One more separated link</Link></li>
                                </ul>
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
