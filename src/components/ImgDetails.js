import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { MobileView, BrowserView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import axios from 'axios';


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    let username = getCookie("user-id");
    return username !== "";
}





export default function ImgDetails(props) {
    const [bookmarks, change_bookmarks] = useState([])
    useEffect(() => {
        const user_id = getCookie("user-id");

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/bookmarks`, {
            "payload": {
                'user-id': user_id
            }
        }).then(function (data) {
            change_bookmarks(data.data)
        })

    }, [])
    function get_bookmarks() {
        const user_id = getCookie("user-id");

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/bookmarks`, {
            "payload": {
                'user-id': user_id
            }
        }).then(function (data) {
            change_bookmarks(data.data)
        })
    }

    function remove_bookmarks() {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/delete_bookmark`, {
            "payload": {
                "user-id": getCookie("user-id"),
                "url": window.location.href
            }
        }).then(function (response) {
            get_bookmarks()
        })
    }

    function add_bookmark() {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/add_bookmark`, {
            "payload": {
                "user-id": getCookie('user-id'),
                "url": window.location.href
            }
        }).then(function (response) {
            get_bookmarks();
        })
    }
    function share() {
        navigator.share({
            "title": "Share this Image",
            "text": props.NASA_id,
            "url": window.location.href
        })
    }

    return (
        <>
            <div className="container mt-5 pt-5" style={{ minHeight: "100vh" }}>
                <div className="text-center">


                    <h1>
                        {props.title}
                    </h1>

                    {/* <img src="https://images-assets.nasa.gov/image/PIA01973/PIA01973~thumb.jpg" className="img-fluid" /> */}
                    <Zoom>
                        <img src={props.img_src} className="img-fluid" alt={props.NASA_id} />
                    </Zoom>
                    {checkCookie("user-id") ? (
                        bookmarks.includes(window.location.href) ? (

                            <button className="btn btn-danger" style={{ float: "right", margin: '30px' }} title={"Remove this image as Bookmarked"} onClick={remove_bookmarks}>
                                <i className="fas fa-times"></i>
                            </button>
                        ) : (
                            <button className="btn btn-danger" style={{ float: "right", margin: '30px' }} title={"Bookmark this image"} onClick={add_bookmark}>
                                <i className="fa fa-bookmark"></i>
                            </button>
                        )
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-danger" style={{ float: "right", marginBottom: '10px' }} title={"Login to Bookmark this image"}>
                                    Login To Bookmark this image
                                </button>
                            </Link>
                        </>
                    )}

                    <MobileView>
                        <br />
                        <button style={{ float: "right", textAlign: "center" }} className="btn btn-danger" onClick={share}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg> Share

                        </button>
                        <br />
                        <br />
                    </MobileView>
                    <BrowserView>
                        <br />
                        <a className="btn-floating btn btn-tw" type="button" role="button" title="Share on twitter"
                            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                            rel="noreferrer" target="_blank">
                            <i className="fab fa-2x fa-twitter" style={{ color: "#00acee" }}></i>
                        </a>

                        <a className="btn-floating btn btn-tw" type="button" role="button" title="Share on facebook"
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank"
                            rel="noreferrer">
                            <i className="fab fa-2x fa-facebook-square"></i>
                        </a>
                    </BrowserView>
                </div>
                <br />
                <hr />
                <br />
                <div className="text-center">
                    <h2>NASA ID - <b>{props.NASA_id}</b></h2>
                    <h2>Taken on - <b>{props.taken_on}</b></h2>
                    <h2>Center - <b>{props.center}</b></h2>
                </div>

                <h2>
                    Description
                </h2>

                <p dangerouslySetInnerHTML={{
                    __html: props.description
                }}>

                </p>

            </div>
        </>
    )
}

ImgDetails.propTypes = {
    title: PropTypes.string.isRequired,
    img_src: PropTypes.string.isRequired,
    NASA_id: PropTypes.string.isRequired,
    center: PropTypes.string.isRequired,
    description: PropTypes.string,
    taken_on: PropTypes.string,
}


ImgDetails.defaultProps = {
    description: "<em>No Description Provided</em>"
}