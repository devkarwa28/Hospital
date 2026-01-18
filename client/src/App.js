import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Routing from './Routing';
export const store = useContext();
const App = () => {
  
  const [token,setToken] = useState("");
  return (
    <div>
    <store.Provider value={[token,setToken]}>
    <Header/>
    <Routing/>
    <Footer/>
    </store.Provider>
    </div>
  )
}
export default App

