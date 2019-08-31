import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import UserForm from './components/user-form';
import UserSummary from './components/user-summary';


const routes = [
    {path:'/', component:UserForm},
    {path:'/user/:id', component:UserForm},
    {path:'/summary', component:UserSummary}
]

class Routes extends Component{
    render(){
        return(
            <Switch>
                {routes.map((route, i)=> <Route exact key={i} path={route.path} component={route.component}/>)}
            </Switch>    
        )
    }
}
export default Routes;