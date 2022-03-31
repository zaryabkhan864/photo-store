import React, {Component} from 'react'

class AddPhoto extends Component{
    constructor(){
        super()
        this.handlesSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const photo = {
            id: Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        // console.log(photo)
        if( description && imageLink ){
            this.props.addPhoto(photo)
            // this.props.onAddPhoto(photo)
            // this.props.onAddPhoto()
            this.props.navigate('/')
        }
    }
    render(){
        return(
          <div>
              {/* <h1>photo frame</h1> */}
              <div className='form'>
                  <form onSubmit={this.handlesSubmit}>
                     <input type="text" placeholder='Link' name='link'/>
                     <input type="text" placeholder='Description' name='description'/>
                     <button onClick={this.yourFunctionHere}>Submit</button>
                  </form>
              </div>
          </div>
        )
    }
}
export default AddPhoto