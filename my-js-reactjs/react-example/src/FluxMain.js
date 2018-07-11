import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './FluxApp.jsx'
import todoAppReducer from './Flux-reducers/reducers'

let store = createStore(todoAppReducer)    // complete state of app
let rootElement = document.getElementById('app')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)
