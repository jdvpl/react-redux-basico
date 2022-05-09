import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Users from './Components/Users';
import About from './Components/About';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
