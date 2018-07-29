import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import initStore from './store'
import { saveGameConfiguration } from './Screens/behaviors'

import Screens from './Screens';
import {push} from "react-router-redux";

export function connect(parentId, width, height, config) {

    const parentElem = document.getElementById(parentId)
    parentElem.style.width=width + 'px'
    parentElem.style.height=height + 'px'

    const guiContainer = document.createElement('div')
    parentElem.appendChild(guiContainer)

    const store = initStore(config.screens)

    render(
        <Provider store={store}>
            <Screens screens={config.screens} />
        </Provider>,
        guiContainer
    );

    store.dispatch(saveGameConfiguration(width, height))
}

export function showScreen(uid) {
    store.dispatch(push(uid))
}
