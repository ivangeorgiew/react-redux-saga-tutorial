// load the scss files
import 'connect-bootstrap/scss/connect-bootstrap.scss'
import '../styles/index.scss'
import React from 'react'
import { render } from 'react-dom'

// the root component - an arrow function that simply returns a div
const Root = () => {
    return <div>Hello World</div>
}

// the function that puts a component inside the div with id #app from the html file
const renderRoot = Component => render(
    <Component />,
    document.getElementById('app')
)

// when the DOM contentent is loaded - render the root component
window.addEventListener('DOMContentLoaded', () => { renderRoot(Root) }, false)
