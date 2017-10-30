import { combineReducers } from 'redux'
import receiveMemes from './receiveMemes_reducers'
import newMeme from './newMeme_reducers'

const rootReducer = combineReducers({
    receiveMemes,
    newMeme
})

export default rootReducer
