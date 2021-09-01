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

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute path="/dashboard" component={Dashboard}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
              <Route path="/product/:id" component={ProductPage}/>

            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
