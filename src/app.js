import React from 'react'
import ReactDOM from 'react-dom'
import OnlineEditor from './components/OnlineEditor'
import reducer from './redux/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const jsx = (
    <Provider store={store}>
        <OnlineEditor />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

export default store