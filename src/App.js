import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome.js';

function App() {
  return (
    <div className="App">
        <Welcome/>
        <Login/>
        <Register/>
    </div>
  );
}

export default App;
