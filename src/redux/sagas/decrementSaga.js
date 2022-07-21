import {all, fork, put,takeEvery} from'redux-saga/effects'
//worker saga


export function* decrement(){
    yield put({type:'DECREMENT'})
} 


export function* decrementSaga(){
    console.log("in saga")
    yield takeEvery('DECREMENT_REQUEST',decrement)
}