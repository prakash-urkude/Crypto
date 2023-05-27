import React from 'react';
import axios from 'axios'

import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Buys.css';

const Buy = () => {
    const [coin, setCoin] = useState({})
  const params = useParams();
  const coinId = params.coinId;

  console.log(params.coin);

  const url = `https://api.coingecko.com/api/v3/coins/${params.coin}`
  console.log(url)

  useEffect(() => {
      axios.get(url).then((res) => {
          console.log(res.data)
          setCoin(res.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])
console.log(coin.market_data)
  return (
    <>
    <Navbar/>
    
    <div className='content'>
    <h1>Buy With Top<span style={{ color: "red" }}>Coins</span></h1>
                    <div className=''>
                        <span className='rank-btn'>Buy</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                            
                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                    <div className=''>
                        <span className='rank-btn'>Pay</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            
                            <p>Pay With</p>
                            {coin.symbol ? <p>$USD</p> : null}
                            
                        </div>
                        <div className='coin-price'>
                            <input style={{padding:"10px"}} placeholder='$USD'></input>
                        </div>
                        <div>
  <input type="checkbox" id="visa" name="payment" value="visa" />
  <label htmlFor="visa">Pay with Visa</label>

  <br />

  <input type="checkbox" id="debit" name="payment" value="debit" />
  <label htmlFor="debit">Pay with Debit</label>

  <br />

  <input type="checkbox" id="credit" name="payment" value="credit" />
  <label htmlFor="credit">Pay with Credit</label>
</div>



                    </div>
                    <div className='text-right'>
  <button className='btn' style={{ padding: "10px", float: "right" }}>Done</button>
</div>
                </div>
    </>
  );
};

export default Buy;
