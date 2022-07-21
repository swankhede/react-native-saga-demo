import { incrementSaga } from "./incrementSaga";
import { decrementSaga } from "./decrementSaga";
import { all, fork } from "redux-saga/effects";
import detailsWatcher from "./detailsSaga";

export default function* rootSaga(){
    yield all[
        incrementSaga(),
        decrementSaga(),
        detailsWatcher()
    ]
}