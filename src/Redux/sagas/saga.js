import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { apicall } from "../../Functions/Apicall";

function* sagaForIncrement(action) {
  // setTimeout(()=>{
  //     console.log(action);
  //      yield put({type:'increment_REQUIRED'})
  // },4000)

  yield delay(1500);
  yield put({ type: "increment_REQUIRED", payload: action.payload });
}
function* sagaForApiCall(action) {
  // setTimeout(()=>{
  //     console.log(action);
  //      yield put({type:'increment_REQUIRED'})
  // },4000)

  const data = yield call(apicall);
  //console.log(data);
  yield put({ type: "callApi_REQUIRED", payload: data });
}

function* mysaga() {
  yield takeLatest("increment", sagaForIncrement);
  yield takeLatest("apiCall", sagaForApiCall);
}
export default mysaga;
