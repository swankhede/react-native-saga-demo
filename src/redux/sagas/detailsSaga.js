import {call, put,take,takeEvery} from'redux-saga/effects'
//worker saga
function* putDetails(action){
    console.log("actionnnn",action)
    yield put({type:'PUT_DETAILS',payload:action.payload})
} 

function* clearStorag(){
    yield put({type:'CLEAR'})
}

function* detailsWatcher(){
    console.log("in saga")

   yield  takeEvery('PUT_DETAILS_REQUEST',putDetails)
    yield takeEvery('CLEAR_STORAGE',clearStorag)
}
export default detailsWatcher