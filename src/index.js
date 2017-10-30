import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

import { fetchMemes } from './actions/receiveMemes_actions'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(fetchMemes())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
