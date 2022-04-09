import React from 'react'
import ReactDOM from 'react-dom'
import KijijiApplication from './components/KijijiApplication'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import housesReducer from './redux/reducers/houses'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import 'normalize.css/normalize.css'


const store = createStore(housesReducer)


const jsx = (
    <Provider store={store}>
        <KijijiApplication />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

export default store
