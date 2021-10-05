import '../App.css';
import Image from '../components/Image';
import React, { useState } from 'react'
import axios from 'axios';


function Apod() {
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
            <div className="container pt-5 mt-3">
                <div className="row p-5 rounded shadow my-5">
                    <p className="h1 text-secondary text-center">Today's Hit</p>
                    <hr />

                    <Image image_heading={data.title} image_src={data.hdurl} img_alt="Seen of the day" informationTitle="Information about the Picture" />
                    <p className="text-center mt-4">
                        This picture was taken by <b>{data.copyright}</b> on <b>{to_date(data.date.replace("-", ""))}</b>
                    </p>

                    <p className="h3 text-center mt-3">
                        Explanation
                    </p>
                    <p className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 mx-auto text-justify lh-lg fs-5 mt-4">
                        {data.explanation}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Apod;
