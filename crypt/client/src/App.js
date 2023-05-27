import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Coins from './pages/Coins/Coins';
import About from './pages/About/About';
import Fpage from './pages/Fpage/Fpage.js';
import SCoin from './components/SCoin/SCoin';
import Register from "./pages/Register/Register"
import Login from './pages/Login/Login';
import Buy from './pages/Buy/buy'
import Sell from './pages/Sell/Sell'
function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Fpage/>} />
      <Route path='/Coins' element={<Coins coins={coins} />} />
      <Route path="/About" element= {<About/>} />
      <Route path='/scoin' element={<SCoin />} />
      <Route path='/coin/:coinId' element={<SCoin />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Buy' element={<Buy />} />
      <Route path='/Buy/:coin' element={<Buy />} />
      <Route path='/Sell/:coin' element={<Sell />} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
