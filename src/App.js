import React from 'react';
import Header from './header';
import {HashRouter , Routes, Route} from 'react-router-dom';
import Home from './home';
import Cart from './cart';
import Myorder from './myorder';
import UpdateCustomer from './edit';
import PatchDetails from './patch';

function App() {
  return (
    <HashRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/myorder" element={<Myorder/>}/>
            <Route exact path="/edit:uid" element={<UpdateCustomer/>}/>
            <Route exact path="/patch:uid" element={<PatchDetails/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
