import 'babel-polyfill'
import React from 'react'
import {render}  from 'react-dom'
import Root from '../containers/Root'
import {configureStore_saga, configureStore_thunk, configureStore_promise} from '../store'
//redux-saga
// const store = configureStore_saga()

//redux-thunk
// const store = configureStore_thunk()

//redux-promise
// const store = configureStore_promise()

//redux-action-tools
const store =

render(
  <Root store={store} />,
  document.getElementById('root')
)
