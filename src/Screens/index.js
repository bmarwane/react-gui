import React from 'react'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store'

import * as styles from './Gui.css'

export default ({screens=[]}) => {

    return (
        <ConnectedRouter history={history}>
            <div className={styles.guiContainer}>
              {
                  screens.map(sc => <Route
                      key={sc.uid}
                      exact={true}
                      path={sc.uid}
                      component={sc.component}
                  />)
              }

            </div>
        </ConnectedRouter>
    )
}
