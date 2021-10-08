import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm border-bottom bg-light p-3 fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" activeClassName="active">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="d-flex justify-content-around mt-4 mt-md-0">
                            <div className={"nav-item"}>
                                <NavLink className="nav-link" aria-current="page" exact to="/" activeClassName="active">Home</NavLink>
                            </div>
                            <div className={"nav-item"}>
                                <NavLink activeClassName="active" className="nav-link" exact to={props.apod_link}>{props.apod_text}</NavLink>
                            </div>
                            <div className={"nav-item"}>
                                <NavLink activeClassName="active" className="nav-link" exact to={props.aboutLink}>{props.aboutText}</NavLink>
                            </div>
                            <div className={"nav-item"}>
                                <NavLink className="nav-link" to={props.image_search_link} exact activeClassName="active">{props.image_search}</NavLink>
                            </div>
                            <div className={"nav-item"}>
                                <NavLink activeClassName="active" className="nav-link" exact to={"/login"}>Login</NavLink>
                            </div>
                            <div className={"nav-item"}>
                                <NavLink activeClassName="active" className="nav-link" exact to={"/bookmarks"}>Your Bookmarks</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    aboutLink: PropTypes.string,
    image_search: PropTypes.string,
    image_search_link: PropTypes.string,
    apod_text: PropTypes.string,
    apod_link: PropTypes.string
}


Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About Text here",
    aboutLink: "/about",
    image_search: "Image Search",
    image_search_link: "/search",
    apod_text: "APOD",
    apod_link: "/apod"
}
