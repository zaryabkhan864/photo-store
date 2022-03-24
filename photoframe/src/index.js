import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
import './Styles/Style.css'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Component/App'


const store = createStore(rootReducer)



ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'))