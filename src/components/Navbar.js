import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="d-flex justify-content-around mt-4 mt-md-0">
                            <div className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to={props.aboutLink}>{props.aboutText}</Link>
                            </div>
                            <div className={"nav-item"}>
                                <Link className="nav-link" to={props.image_search_link}>{props.image_search}</Link>
                            </div>
                            <div className={"nav-item"}>
                                <Link className="nav-link" to={props.apod_link}>{props.apod_text}</Link>
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
