import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchCount_async } from '../middleware/api'

function* fetchCountNum (action) {
  try{
    const count = yield call(fetchCount_async)
    yield put({
      type: 'COUNT_SAGA_SUCCEEDED',
      payload: {
        counterNum: count.counterNum
      }
    })
  } catch (e) {
    yield put({
      type: 'COUNT_SAGA_FAILED',
      message: e.message
    })
  }
}

function* sagas () {
  yield takeEvery('COUNT_SAGA_REQUSTED',fetchCountNum)
}
function* sagas() {
  yield takeLatest("COUNT_SAGA_REQUSTED", fetchCountNum);
}
export default sagas