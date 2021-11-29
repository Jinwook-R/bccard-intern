import Login from '../src/pages/login/Login.js'
import App from './App'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const AppRouter = () => {


    return <>
        <Router>
            <div>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/">
                        <App/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </>
}

export default AppRouter;