import { any, string } from 'prop-types'
import React, { PureComponent } from 'react'
import { NotificationContainer } from 'react-notifications'

export class App extends PureComponent {
    render() {
        const { year, children } = this.props

        return (
            <div>
                <NotificationContainer />
                <div className="main-app">
                    <p>{`The year is ${year}`}</p>
                    {children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    year: string,
    children: any
}
