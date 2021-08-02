import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import Main from "../Main/Main";

const Routes = ({user}) =>{
    return(
        <Switch>
            {
                user ? (
                    <Switch>
                        <Route path='/' component={Main}  />
                        <Redirect to='/' />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Redirect to='/login' />
                    </Switch>
                )
            }
        </Switch>
    )
}


export default Routes; 