import './App.css';

import {Provider, connect} from 'react-redux';
import {store} from './redux/config/store'
import  counterActions  from './redux/actions/counter';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


import Users from './Components/Users';
import About from './Components/About';
import Home from './Components/Home';
import Header from './Components/Header';


const mapDispathToProps=()=>({
  ...counterActions,
})

const mapStateToProps=({counter})=>({
  counter
})
const ConectarComponente=connect(mapStateToProps,mapDispathToProps())(Home)


function App() {
 
  return (

    <Provider store={store}>
      
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<ConectarComponente />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
