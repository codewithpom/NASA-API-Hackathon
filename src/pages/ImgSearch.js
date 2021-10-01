import React, {useState} from 'react'
import axios from "axios";
import ReactDOM from 'react-dom';
import {BrowserRouter, Link} from 'react-router-dom';

let page = 1;
let more = true;
let topic;

export default function ImgSearch() {
    const [display, show] = useState("none");
    const bringMore = () => {
        console.log("Once more")

        let query = document.getElementById("input").value;
        axios.get(`https://images-api.nasa.gov/search?page=1&q=${query}`).then((response) => {
            show("");
            if (!more) {
                return;
            }
            console.log(response);
            if (topic !== query) {
                ReactDOM.unmountComponentAtNode(document.getElementById('data_div'))
            }else {
                topic = query;
            }

            // if (response['data']['collection']['items']['links'] === undefined){
            //     return;
            // }


            let element =
                <div className="row">

                    {response['data']['collection']['items'].map(add)}

                </div>

            function add(item) {
                try {
                    return <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={item["links"][0]["href"]} className="card-img-top"
                                 alt="Search Result"/>
                            <div className="card-body">
                                <h5 className="card-title">{item['data'][0]['title']}</h5>
                                <p className="card-text">
                                    <b>
                                        {item['data'][0]['description']}
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
                                <BrowserRouter>
                                    <Link to="/search" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </BrowserRouter>

                            </div>
                        </div>
                    </div>
                } catch (e) {
                    console.log("Done")
                }

            }

            ReactDOM.render(element, document.getElementById("data_div"));


            try {
                for (let datumElement of response.data['collection']['links']) {
                    if (datumElement['rel'] === 'next') {
                        more = true
                        page = page + 1
                        return;
                    }

                }
            } catch (e) {
                more = false;

            }
            more = false;
        });
    }

    return <>
        <div className="container">
            <br/>
            <div className="mb-3">
                <h1 className="centre">
                    Enter the search term
                </h1>
                <br/>
                <input type={"text"} className="form-control" placeholder={"Enter the search term here"}
                       id={"input"}/>
            </div>
            <button className="btn btn-primary" onClick={bringMore}>
                Search for it
            </button>
            <div style={{textAlign: "center", display: display}}>


                <div id="data_div">

                </div>

                <div style={{textAlign: "center"}}>
                    <button id="more" className={"btn btn-primary"} style={{display: "none"}}>
                        Load more
                    </button>

                    <h3 id="end" style={{display: "none"}}>
                        Sorry There are no more results
                    </h3>
                </div>

            </div>
        </div>
    </>
}


