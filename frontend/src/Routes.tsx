import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashborard from './pages/Dashboard';
import Home from './pages/Home'

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/dashboard" exact>
                <Dashborard/>
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  export default Routes;
  