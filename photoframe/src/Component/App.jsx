import Main from './Main'
import{connect} from 'react-redux'
import { removePhoto } from '../redux/action'
import {bindActionCreators} from 'redux'
function mapStateToProps (state){
    return{
        allPhotos : state
    }
}
function mapDisptachToProps(disptach){
    return bindActionCreators({removePhoto},disptach)
}

const App = connect(mapStateToProps,mapDisptachToProps)(Main)

export default App