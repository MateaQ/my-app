import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Homescreen from './screens/Homescreen.js';
import Registrationscreen from "./screens/Registrationscreen";
import Loginscreen from "./screens/Loginscreen";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>

        <Route path="/home" exact component={Homescreen} />
        <Route path='/login' exact component ={Loginscreen}/>
<Route path='/register' exact component ={Registrationscreen}/>



        </BrowserRouter>
    </div>
  );
}

export default App;
