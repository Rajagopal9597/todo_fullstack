import './App.css';
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Home from "./components/Home/home"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
