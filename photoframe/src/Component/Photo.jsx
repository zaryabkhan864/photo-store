import React from "react";
import PropTypes from 'prop-types'
import '../Styles/Style.css'
import{connect} from 'react-redux'

function Photo(props){
    console.log(props.allPhotos)
    const frame = props.finalPhoto;
    return(
        <figure className="figure">
        <img className="photo" src={frame.imageLink} alt={frame.description}/>
        <figcaption><p>{frame.description}</p></figcaption>
        <div className="button-container"><button className="remove-button" onClick={
            ()=>{
                // props.onRemovePhoto(frame)
                props.onRemovePhoto(1)
            }
        }>Remove</button></div>
     
    </figure>
    )
}
Photo.propTypes = {
    // onRemovePhoto: PropTypes.func.isRequired,
    finalPhoto:PropTypes.object.isRequired
}
function mapStateToProps (state){
    return{
        allPhotos : state
    }
}


export default connect(mapStateToProps)(Photo) 