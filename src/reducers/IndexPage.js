
function count(state = 0,action){
  const {type, payload} = action
  switch(type) {
    //redux-saga
    case 'COUNT_SAGA_SUCCEEDED':
      return state + payload.counterNum
    //redux-thunk
    case 'COUNT_THUNK':
      return state
    case 'COUNT_THUNK_SUCCESS':
      return state + payload.counterNum
    case 'COUNT_THUNK_FAILED':
      return state
    //redux-promise
    case 'COUNT_PROMISE':
      if(!action.error){
        return state + payload.counterNum
      }
      return state
    //redux-promise-middleware
    //redux-action-tools

    default:
      return state
  }
}

export function counter (state={}, action) {
  return {
    count: count(state.count,action)
  }
}