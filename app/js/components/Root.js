import React from 'react'
import { App } from 'components/App'

// you can give specify the children prop that to be passed down to a component
// by this syntax <App>HERE ARE THE CHILDREN</App>
// OR
// by this syntax <App children={HERE ARE THE CHILREN} />
const Root = () => {
    return (
        <App year={'2018'}>
            <h4>Hello World</h4>
            <ul className="generic-list">
                <li>Elit dignissimos eligendi</li>
                <li>Consectetur assumenda laudantium.</li>
                <li>Amet a quidem.</li>
                <li>Sit amet nam?</li>
                <li>Dolor eum tempora.</li>
            </ul>
        </App>
    )
}

export default Root
