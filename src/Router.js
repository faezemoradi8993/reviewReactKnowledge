import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Help, About, Home, Contact } from './Pages'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                    <Route path={'/about'} exact component={About} />
                    <Route path={'/help'} exact component={Help} />
                    <Route path={'/contact-us'} exact component={Contact} />
                    <Route path={'/'} exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
