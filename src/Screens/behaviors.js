import {Map} from 'immutable'

const SAVE_GAME_CONFIG = 'SAVE_GAME_CONFIG'

export function saveGameConfiguration(width, height) {
    return {
        type: SAVE_GAME_CONFIG,
        config: {
            width,
            height,
        }
    }
}
export default function reducer(state = Map(), action) {
    switch (action.type) {
        case SAVE_GAME_CONFIG:
            return state.merge({
                gameConfig: action.config
            })
    }
    return state
}