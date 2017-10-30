import {
    RECEIVE_MEMES
} from './types'

const GET_MEMES_URL = 'https://api.imgflip.com/get_memes'

const receiveMemes = json => {
    const { memes } = json.data

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

const fecthMemesJson = () => {
    return fetch(GET_MEMES_URL)
        .then(response => response.json())
}

export const fetchMemes = () => {
    return function (dispatch) {
        return fecthMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
}
