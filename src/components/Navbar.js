import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Category from './Category';
import SearchBar from './SearchBar';
import M from 'materialize-css';


export default class Navbar extends Component {

    componentDidMount() {
        var menu = document.querySelector('.sidenav');
        M.Sidenav.init(menu);
    }

    render() {
        const { getCategory, getSearch } = this.props;
        return (

            <div>
                <nav className='nav-wrapper  red darken-3'>
                    <div className='container'>
                        <NavLink to='/' className="brand-logo">News'Times</NavLink>
                        <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                        <ul id='nav-mobile' className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="#">
                                <div>
                                    <span className='dropdown-trigger drpdown ' id='drpdown' data-target='dropdown1'>Category</span>
                                    <ul id='dropdown1' className='dropdown-content red darken-3'>
                                        <Category getCategory={getCategory} />
                                    </ul>
                                </div>
                            </NavLink></li>
                            <li><SearchBar getSearch={getSearch} /></li>

                        </ul>
                    </div>
                </nav>

                <ul className="sidenav red darken-3 white-text" id='mobile-demo'>
                    <li className="header center ">News'Times</li>
                    <li className='container'><SearchBar getSearch={getSearch} /></li>
                    <div className="divider"></div>

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="#">
                        <ul>
                            <span>Category</span>
                            <Category getCategory={getCategory} />
                            </ul>
                        
                    </NavLink></li>

                </ul>
            </div>

        )
    }
}


