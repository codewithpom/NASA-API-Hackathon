import '../App.css';
import Image from '../components/Image';
import Navbar from '../components/Navbar';
import React, { useState } from 'react'
import axios from 'axios';


function IndexPage() {
    const [data, change_data] = useState({ date: "" });
    React.useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`).then((response) => {
            change_data(response.data);
        });
    }, []);

    const to_date = (dateString) => {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        const date = new Date(year, month - 1, day);

        return date.toDateString();

    }

    return (
        <>
            <Navbar title="Nasa Picture of the day" aboutText="About us" aboutLink="/about" />
            <br/>
            <div className="container">
                <Image image_heading={data.title} image_src={data.hdurl} img_alt="Seen of the day" informationTitle="Information about the Picture" />
                <br/>
                <div className="centre">
                    <p>
                        This picture was taken by <b>{data.copyright}</b> on <b>{to_date(data.date.replace("-", ""))}</b>
                    </p>

                </div>

                <br/>
                <div className="centre">
                    <h1>
                        Explanation
                    </h1>
                </div>
                <div className="col-md-3 box">
                    <br/>
                    <b>
                        {data.explanation}
                    </b>
                    <br/>
                    <br/>
                </div>
                <br/>
                <br/>
            </div>
        </>
    );
}

export default IndexPage;
