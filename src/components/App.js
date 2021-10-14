import { AuthProvider } from '../context/AuthContext';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import ProductPage from './ProductPage';
import SelectionPage from './SelectionPage';
import Profile from './Profile';
import PostAd from './PostAd';
import Checkout from './Checkout';
import { StateProvider } from '../context/StateContext';
import reducer, { initialState } from '../context/reducer';

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <StateProvider initialState={initialState} reducer={reducer}>
              <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
                <Route path="/product/:postId" component={ProductPage}/>
                <Route path="/select" component={SelectionPage}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/postad" component={PostAd}/>
                <Route path="/checkout" component={Checkout}/>
              </Switch>
            </StateProvider>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
