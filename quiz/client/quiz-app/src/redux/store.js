import { combineReducers, configureStore } from '@reduxjs/toolkit'

// call reducer
import questionReducer from './quest_reducer'
import { resultReducer } from './result_reducer'

const rootReducer = combineReducers({
    questions: questionReducer,
    result : resultReducer
})

// create store with reducer

export default configureStore({reducer:rootReducer})