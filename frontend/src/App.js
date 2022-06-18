import {Route, Routes} from 'react-router-dom'

import './App.css';
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {Home} from "./svg";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path={"/"} element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
