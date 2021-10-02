import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={props.aboutLink}>{props.aboutText}</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link className="nav-link" to={props.image_search_link}>{props.image_search}</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link className="nav-link" to={props.apod_link}>{props.apod_text}</Link>
                        </li>
                    </ul>
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
