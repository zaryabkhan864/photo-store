import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";

function PhotoFrame(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            {/* <button className="addIcon">+</button> */}
            <div className="photo-grid">
                {props.PhotoBlock.map((singlePhoto, index) => <Photo key={index} onRemovePhoto={props.onRemovePhoto} finalPhoto={singlePhoto} />
                )}
            </div>

        </div>

    )

}


export default PhotoFrame