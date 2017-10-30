import { NEW_MEME } from '../actions/types'

const newMeme = (state = [], action) => {
    switch (action.type) {
        case NEW_MEME:
            state = [...state, action.meme]
            return state
        default:
            return state
    }
}

export default newMeme
