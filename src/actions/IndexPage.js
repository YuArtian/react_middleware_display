import { fetchCount_async, fetchCount_fetch } from '../middleware/api'

//redux-saga
export function addCount_saga () {
  return {
    type: 'COUNT_SAGA_REQUSTED',
  }
}

//redux-thunk
const COUNT_THUNK = 'COUNT_THUNK'
const COUNT_THUNK_SUCCESS = 'COUNT_THUNK_SUCCESS'
const COUNT_THUNK_FAILED = 'COUNT_THUNK_FAILED'

export function addCount_thunk () {
  return function (dispatch, getState) {
    dispatch({
      type: COUNT_THUNK
    })
    fetchCount_async()
      .then(data => {
        dispatch({
          type: COUNT_THUNK_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        dispatch({
          type: COUNT_THUNK_FAILED,
          payload: error
        })
      })
  }
}

//redux-promise
const COUNT_PROMISE = 'COUNT_PROMISE'

export function addCount_promise () {
  return {
    type: COUNT_PROMISE,
    payload: fetchCount_async()
  }
}
