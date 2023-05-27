import React from 'react'
import CoinItem from '../../components/CoinItem/CoinItems.js'
import Coin from '../../components/SCoin/SCoin.js'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.js'
import './Coins.css'

const Coins = (props) => {
  // console.log(props)
    return (
        <div className='container'>
          <Navbar />
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>
{/* coin list on by one */}
                {props.coins.map(coins => {
                  console.log(coins.id)
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>
        </div>
    )
}

export default Coins