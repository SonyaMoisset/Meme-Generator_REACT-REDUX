import { username, password } from './secrets'

import {
    RECEIVE_MEMES,
    NEW_MEME
} from './types'

const receiveMemes = json => {
    const { memes } = json.data

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

const fecthMemesJson = () => {
    return fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
}

export const fetchMemes = () => {
    return function (dispatch) {
        return fecthMemesJson()
                .then(json => dispatch(receiveMemes(json)))
    }
}

export const newMeme = meme => {
    return {
        type: NEW_MEME,
        meme
    }
}

const postMemeJson = params => {
    params["username"] = username
    params["password"] = password

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&')

    console.log('bodyParams', bodyParams)

    return fetch('https://api.imgflip.com/caption_image', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: bodyParams
            })
            .then(response => response.json())
}

export const createMeme = new_meme_object => {
    return function (dispatch) {
        return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMeme(new_meme)))
    }
}
