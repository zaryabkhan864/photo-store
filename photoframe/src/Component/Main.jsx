import React, { Component } from "react";
import PhotoFrame from "./PhotoFrame";
import PropTypes from "prop-types";
import AddPhoto from "./AddPhoto";
import Title from "./Title";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../Component/withRouter";
import {removePhoto} from '../redux/action'


class Main extends Component {

  constructor() {
    console.log("constructor");
    super();
    // this.state = {
    //   allPhotos: [
    //     {
    //       id: 0,
    //       description: "beautiful sea",
    //       imageLink: "https://picsum.photos/800/600?image=14",
    //     },
    //     {
    //       id: 1,
    //       description: "Coffee cup",
    //       imageLink: "https://picsum.photos/800/600?image=30",
    //     }, {
    //       id: 2,
    //       description: "Freedom",
    //       imageLink: "https://picsum.photos/800/600?image=50"
    //     }, {
    //       id: 3,
    //       description: "Farm",
    //       imageLink: "https://picsum.photos/800/600?image=85"
    //     }
    //   ]

    // }
    // this.removePhoto = this.removePhoto.bind(this);

  }
  // removePhoto(photoRemoved) {
  //   console.log(photoRemoved.description);
  //   this.setState((state) => ({
  //     allPhotos: this.state.allPhotos.filter((photo) => photo !== photoRemoved),
  //   }));
  // }
  // addPhoto(photoSubmitted) {
  //    // const navigate = useNavigate();
  //    this.setState((state) => ({
  //     allPhotos: state.allPhotos.concat([photoSubmitted]),
  //   }));
  //   // here define route
  //   this.props.navigate("/");
  // }
  // componentDidMount() {}
  // componentDidUpdate(preProps, preState) {

  //   console.log(preState.allPhotos);
  //   console.log(this.state);
  // }
  componentDidMount(){
    // this.props.disptachPhoto(removePhoto(1))
    this.props.dispatch(removePhoto(1))
  }
  render() {

    console.log("Render");
    return (
//update file
      <div>
        <Routes>
        <Route
            exact
            path='/'
            element={
              <>
                <Title todo={"PhotoFrame"} />{" "}
                <PhotoFrame
                  // PhotoBlock={this.props.allPhotos}
                  {...this.props}
                  // onRemovePhoto={this.removePhoto}
                />
              </>
            }
          />
          {/* <Route
            path='/AddPhoto'
            element={
              <AddPhoto
                onAddPhoto={(addedPhoto) => {
                  this.addPhoto(addedPhoto);
                }}
              />
            }
          /> */}
        </Routes>
      </div>

    );
  }

}
// PhotoFrame.propTypes = {
//   PhotoBlock:PropTypes.array.isRequired,
//   onRemovePhoto:PropTypes.func.isRequired
// }

export default withRouter(Main);