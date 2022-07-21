import {applyMiddleware, createStore} from 'redux'
import { combineReducers } from 'redux'
import { mainReducer } from './mainReducer'
import createSagaMiddleware from '@redux-saga/core'
//import watcherSaga from './mainReducer'
import { detailsReducer } from './detailsReducer'
import rootSaga from './sagas'
import detailsWatcher from './sagas/detailsSaga'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'


const SagaMiddleWare=createSagaMiddleware()
const persistConfig = {
      key: 'root',
      storage:AsyncStorage,
    }
 
const rootReducer=combineReducers({
        mainReducer,
       detailsReducer
   })

const persistedReducer = persistReducer(
        persistConfig, 
        rootReducer)
     
const store =createStore(
            persistedReducer,
            applyMiddleware(SagaMiddleWare)
            )  

const persistor = persistStore(store)
SagaMiddleWare.run(detailsWatcher)


export {store,persistor}

 
    
    



