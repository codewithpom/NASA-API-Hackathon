import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ImgDetails(props) {
    return (
        <>
            <div className="container">
                <div className="centre">
                    <h1>
                        {props.title}
                    </h1>

                    {/* <img src="https://images-assets.nasa.gov/image/PIA01973/PIA01973~thumb.jpg" className="img-fluid" /> */}
                    <Zoom>
                        <img src={props.img_src} className="img-fluid" alt={props.NASA_id} />
                    </Zoom>
                </div>
                <br />
                <hr />
                <br />
                <div className="centre">
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
                    {/* Members of NASA's Mars 2020 project take a moment after attaching the remote sensing mast to the Mars 2020 rover. The image was taken on June 5, 2019, in the Spacecraft Assembly Facility's High Bay 1 clean room at NASA's Jet Propulsion Laboratory in Pasadena, California. https://photojournal.jpl.nasa.gov/catalog/PIA23267. */}

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