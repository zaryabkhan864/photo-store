import React, { Component } from 'react'
import PhotoFrame from './PhotoFrame';
import PropTypes from 'prop-types';
import AddPhoto from './AddPhoto';
import Title from './Title';
import { Route, Router, Routes } from 'react-router-dom';



class Main extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      allPhotos: [
        {
          id: "0",
          description: "beautiful sea",
          imageLink: "https://picsum.photos/800/600?image=14"
        },
        {
          id: "1",
          description: "Coffee cup",
          imageLink: "https://picsum.photos/800/600?image=30"
        }, {
          id: "2",
          description: "Freedom",
          imageLink: "https://picsum.photos/800/600?image=50"
        }, {
          id: "3",
          description: "Farm",
          imageLink: "https://picsum.photos/800/600?image=85"
        }
      ]

    }
    this.removePhoto = this.removePhoto.bind(this)

  }
  removePhoto(photoRemoved) {
    console.log(photoRemoved.description)
    this.setState((state) => ({
      allPhotos: this.state.allPhotos.filter((photo) => photo !== photoRemoved)
    }))
  }
  addPhoto(photoSubmitted){
    this.setState(state =>({
      allPhotos: state.allPhotos.concat([photoSubmitted])
    }))
  }
  componentDidMount() {


  }
  componentDidUpdate(preProps, preState) {

    console.log(preState.allPhotos)
    console.log(this.state)
  }
  render() {
    console.log('Render')
    return (
      <div>
        <Routes>
        <Route exact path="/" element={<><Title todo={'PhotoFrame'} /> <PhotoFrame PhotoBlock={this.state.allPhotos} onRemovePhoto={this.removePhoto} /></>}/>
          <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={(addedPhoto)=>{
            console.log(addedPhoto)
          }}/>} />
        </Routes>
      </div>

    );
  }

}
// PhotoFrame.propTypes = {
//   PhotoBlock:PropTypes.array.isRequired,
//   onRemovePhoto:PropTypes.func.isRequired
// }

export default Main