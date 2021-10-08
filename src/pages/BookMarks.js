import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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

export default function BookMarks() {
    const [element, change_element] = useState([]);
    useEffect(() => {
        if (getCookie('user-id') === "") {
            window.location.href = "#/login";
            return <></>;
        }

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/bookmarks`, {
            "payload": {
                'user-id': getCookie('user-id')
            }
        }).then(function (data) {
            change_element(data.data);
        })



    }, [])


    function remove_card(id) {
        const element = document.getElementById(id);
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/delete_bookmark`, {
            "payload": {
                "user-id": getCookie("user-id"),
                "url": element.getAttribute("link")
            }
        }).then(function (response) {
            element.remove();
        })


    }

    console.log(element)
    return (
        <div className="conatiner mt-4 pt-5 text-center" style={{ minHeight: "100vh" }}>

            {
                Array(element)[0].map((link, index) => {
                    console.log(link)
                    return (

                        <div className="card" style={{ width: "18rem" }} key={index} id={index} link={link}>
                            <img src={`https://images-assets.nasa.gov/image/${link.split("/").slice(-1)}/${link.split("/").slice(-1)}~thumb.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{decodeURI(link.split("/").slice(-1))}</h5>
                                <button className="btn btn-danger mx-3" onClick={() => remove_card(index)}>
                                    <i className="fa fa-times" aria-hidden="true"></i>
                                </button>

                                <Link to={link.replace(/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/, '$1').replace("#", "")}>
                                    <button className="btn btn-primary">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
