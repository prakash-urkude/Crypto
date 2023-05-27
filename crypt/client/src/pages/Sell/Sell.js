import React from 'react';
import axios from 'axios'

import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Sell.css';

const Sell = () => {
    const [input, setInput] = useState(1);
    const [coin, setCoin] = useState({})
    const [coins, setCoins] = useState({})
  const params = useParams();
  const coinId = params.coinId;

  console.log(params.coin);

  const url = `https://api.coingecko.com/api/v3/coins/${params.coin}`
  console.log(url)

  useEffect(() => {
      axios.get(url).then((res) => {
          console.log(res.data)
          setCoins(res.data)
          setCoin(res.data.market_data.current_price.usd)
      }).catch((error) => {
          console.log(error)
      })
  }, [])
const into = (coin*input)
  return (
    <>
    <Navbar/>
    
    <div className='content'>
    <h1>Sell With Top<span style={{ color: "red" }}>Coins</span></h1>
                    <div className=''>
                        <span className='rank-btn'>Sell</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coins.image ? <img src={coins.image.small} alt='' /> : null}
                            <p>{coins.name}</p>
                            {coins.symbol ? <p>{coins.symbol.toUpperCase()}/USD</p> : null}
                            
                        </div>
                        <div className='coin-price'>
                        <input
  style={{ padding: "10px" }}
  placeholder='Coins You Want To Sell'
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>
                        </div>
                    </div>
                    <div className=''>
                        <span className='rank-btn'>Get</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            
                            <p>You Will Get</p>
                            {coins.symbol ? <p>$USD</p> : null}
                            
                        </div>
                        <div className='coin-price'>
                        <div className='coin-price'>
                           <h1>${input*coin}</h1>
                        </div>

                        </div>
                        <div>
  <input type="checkbox" id="visa" name="payment" value="visa" />
  <label htmlFor="visa">Collect With Visa</label>

  <br />

  <input type="checkbox" id="debit" name="payment" value="debit" />
  <label htmlFor="debit">Collect With Debit</label>

  <br />

  <input type="checkbox" id="credit" name="payment" value="credit" />
  <label htmlFor="credit">Collect With Credit</label>
</div>



                    </div>
                    <div className='text-right'>
  <button className='btn' style={{ padding: "10px", float: "right" }}>Done</button>
</div>
                </div>
    </>
  );
};

export default Sell;
