import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Main from './Component/Main'
import {BrowserRouter} from 'react-router-dom'
import './Styles/Style.css'








ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'))