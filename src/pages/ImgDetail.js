import React from 'react'
import ImgDetails from '../components/ImgDetails';
import axios from 'axios';


export default function ImgDetail(props) {
    const img_url = `https://images-assets.nasa.gov/image/${props.match.params.id}/${props.match.params.id}~thumb.jpg`;
    const NASA_id = props.match.params.id;
    const [data, change_data] = React.useState({
        title: "Loading",
        center: "Loading",
        description: "Loading",
        taken_on: "Loading"
    });

    React.useEffect(() => {
        axios.get(`https://images-assets.nasa.gov/image/${props.match.params.id}/metadata.json`).then((response) => {
            let final_data = {
                title: response.data['AVAIL:Title'],
                center: response.data["AVAIL:Center"],
                taken_on: response.data['XMP:DateCreated']
            }
            if (response.data["AVAIL:Description"] !== "") {
                final_data['description'] = response.data["AVAIL:Description"].replace("\n", "<br/>")
            } else {
                final_data['description'] = "<em>No Description Provided</em>"
            }
            console.log(final_data);
            change_data(final_data);

        }).catch(function (err) {
            window.location.href = "#/404"
        });
    }, []);

    return (
        <>
            <ImgDetails title={data['title']} center={data['center']} description={data['description']} img_src={img_url} NASA_id={NASA_id} taken_on={data['taken_on']} />
        </>
    )
}
