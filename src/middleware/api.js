import 'whatwg-fetch'

// ES7 method
export async function fetchCount_async () {
  const response = await fetch('qweqweqwew')
  const data = await response.json()
  return data
}

// ES6 fetch
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  let error = new Error(response.statusText)
  error.response = response
  throw error
}

const parseJSON = response => response.json()

export function fetchCount_fetch(){
  return fetch('count')
          .then(checkStatus)
          .then(parseJSON)
}