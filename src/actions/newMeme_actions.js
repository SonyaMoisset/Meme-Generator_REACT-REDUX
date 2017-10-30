import { username, password } from './secrets'

import {
    NEW_MEME
} from './types'

const CAPTION_IMAGE_URL = 'https://api.imgflip.com/caption_image'

const newMeme = meme => {
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

    return fetch(CAPTION_IMAGE_URL, {
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
