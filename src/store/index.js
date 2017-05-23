import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
// redux-saga
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'

export function configureStore_saga (initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  )
  sagaMiddleware.run(sagas)
  return store
}

//redux-thunk
import thunk from 'redux-thunk'

export function configureStore_thunk (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
  return store
}

//redux-promise
import promiseMiddleware from 'redux-promise'

export function configureStore_promise (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(promiseMiddleware, logger)
  )
  return store
}

//redux-action-tools
import