import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Image(props) {
    return (
        <>
            <div className="centre">
                <h1>
                    {props.image_heading}
                </h1>
            </div>
            <Zoom>
                <img className="img-fluid" src={props.image_src} alt={props.img_alt} />
            </Zoom>
            <br/>
            <br/>
            <br/>
            <div className="centre">
                <h1>
                    {props.informationTitle}
                </h1>
            </div>

        </>
    )
}


Image.propTypes = {
    image_heading: PropTypes.string.isRequired,
    image_src: PropTypes.string.isRequired,
    informationTitle: PropTypes.string.isRequired,
    img_alt: PropTypes.string.isRequired
}


Image.defaultProps = {
    image_heading: "Set The image by image_heading in the props",
    image_src: "Set the img src by image_src in the props",
    informationTitle: "Set the Title here by informationTitle from the props",
    img_alt: "Set the img alt by img_alt from the props"
}
