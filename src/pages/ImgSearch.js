import React, { useState } from 'react'
import axios from "axios";
import ReactDOM from 'react-dom';
import { HashRouter, Link } from 'react-router-dom';


export default function ImgSearch() {
    const [display, show] = useState("none");
    const bringMore = () => {
        console.log("Once more")

        let query = document.getElementById("input").value;
        axios.get(`https://images-api.nasa.gov/search?page=1&q=${query}&media_type=image`).then((response) => {
            show("");
            console.log(response);

            ReactDOM.unmountComponentAtNode(document.getElementById('data_div'))


            // if (response['data']['collection']['items']['links'] === undefined){
            //     return;
            // }
            console.log(response['data']['collection']['items'].length)
            if (response['data']['collection']['items'].length === 0) {
                console.log("No results found");
                document.getElementById("end").style.display = "";
                return;
            } else {
                document.getElementById("end").style.display = "none";
            }

            let element =
                <div className="row">

                    {response['data']['collection']['items'].map(add)}

                </div>

            function add(item, index) {
                try {
                    return <div className="col-lg-4 d-flex align-items-stretch" key={index}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={item["links"][0]["href"]} className="card-img-top"
                                alt="Search Result" />
                            <div className="card-body">
                                <h5 className="card-title">{item['data'][0]['title']}</h5>
                                <p className="card-text">
                                    <b dangerouslySetInnerHTML={{ __html: item['data'][0]['description'] }}>

                                    </b>

                                </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" key={0}>Taken on
                                    - <b>{item['data'][0]['date_created']}</b></li>
                                <li className="list-group-item" key={1}>Center -
                                    <b>
                                        {item['data'][0]['center']}
                                    </b>
                                </li>
                                <li className="list-group-item" key={2}>NASA Id - {item['data'][0]['nasa_id']}</li>
                            </ul>
                            <div className="card-body">
                                <HashRouter basename={"/"}>
                                    <Link to={`/image/${item['data'][0]['nasa_id']}`} className="card-link">Details</Link>
                                </HashRouter>

                            </div>
                        </div>
                    </div>
                } catch (e) {
                    console.log("Done")
                }

            }
            console.log("Rendering");
            ReactDOM.render(element, document.getElementById("data_div"));
            console.log("Rendered");

        });
    }

    return <>
        <div className="container mt-5 pt-5" style={{ minHeight: "100vh" }}>
            <br />
            <div className="mb-3">
                <h1 className="centre">
                    Enter the search term
                </h1>
                <br />
                <input type={"text"} className="form-control" placeholder={"Enter the search term here"}
                    id={"input"} />
            </div>
            <button className="btn btn-primary" onClick={bringMore}>
                Search for it
            </button>
            <div style={{ textAlign: "center", display: display }}>


                <div id="data_div">

                </div>

            </div>

            <div style={{ textAlign: "center" }}>
                <br />
                <h3 id="end" style={{ display: "none" }}>
                    Sorry No results found
                </h3>
            </div>
        </div>
    </>
}


