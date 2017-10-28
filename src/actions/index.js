export const RECEIVE_MEMES = 'RECEIVE_MEMES'

function receiveMemes(json) {
    const { memes } = json.data;

    return {
        type: RECEIVE_MEMES,
        memes
    }
}

function fecthMemesJson() {
    return fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
}

export function fetchhMemes() {
    return function (dispatch) {
        return fetchMemesJson()
                .then(json => dispatch(receiveMemes(json)))
    }
}