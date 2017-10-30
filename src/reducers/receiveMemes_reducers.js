import { RECEIVE_MEMES } from '../actions/types'

const receiveMemes = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_MEMES:
            return action.memes
        default:
            return state
    }
}

export default receiveMemes
