import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";
import PropTypes from 'prop-types'

function PhotoFrame(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            {/* <button className="addIcon">+</button> */}
            <div className="photo-grid">
                {props.allPhotos
                .sort(function(x,y){
                    return y.id - x.id
                })
                .map((singlePhoto, index) => <Photo key={index}
                {...props}
                //  onRemovePhoto={props.onRemovePhoto}
                  finalPhoto={singlePhoto} />
                )}
            </div>

        </div>

    )

}

PhotoFrame.propTypes = {
    allPhotos: PropTypes.array.isRequired

}

export default PhotoFrame