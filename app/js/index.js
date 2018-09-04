import 'connect-bootstrap/scss/connect-bootstrap.scss'
import '../styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from 'components/Root'

// add AppContainer in order to have hot-reloading of components
const renderRoot = Component => render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById('app')
)

if (module.hot) {
    // when a change to the Root component was detected, re-require it
    // in order to have the changes without reloading the page
    module.hot.accept('./components/Root', () => {
        const nextRoot = require('./components/Root').default

        renderRoot(nextRoot)
    })
}

window.addEventListener('DOMContentLoaded', () => { renderRoot(Root) }, false)
