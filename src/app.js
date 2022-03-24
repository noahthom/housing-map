import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import KijijiApplication from './components/KijijiApplication'


const jsx = (
    <KijijiApplication />
)

ReactDOM.render(jsx, document.getElementById('app'))

