import React from 'react'
import PropTypes from 'prop-types'

import './Navbar.css'
export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <a className="navbar-brand" href="/">{props.Title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="/">{props.Home }<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active " href="/">{props.About }</a>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                <div className={`form-check form-switch text text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
                    <input className="form-check-input btn-lg" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >DarkMode</label>
                </div>
                
                </div>
            </nav>
       
    )
}

Navbar.propTypes = {
    Title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
    
}
Navbar.defaultProps = {
    Title:"Set title here",
    About:"Set About Here"
};