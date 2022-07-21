import {all, fork, put,takeEvery} from'redux-saga/effects'
//worker saga
function* increment(){
    yield put({type:'INCREMENT'})
} 


export function* incrementSaga(){
    console.log("in saga")
    yield takeEvery('INCREMENT_REQUEST',increment)
}




