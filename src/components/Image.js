import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Image(props) {
    return (
        <>
            <p className="h2 text-center">
                {props.image_heading}
            </p>
            <Zoom>
                <img className="img-fluid" src={props.image_src} alt={props.img_alt} />
            </Zoom>
            <p className="h2 text-center mt-4">
                {props.informationTitle}
            </p>
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
