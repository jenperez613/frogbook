import {Route, Routes} from 'react-router-dom'

import './index.css';
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {Home} from "./svg";

function App() {
    const get=async()=> {
        const res = await fetch('http://localhost:3000')
        console.log(res)
    }
    get();

  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
