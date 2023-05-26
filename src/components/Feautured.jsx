/* eslint-disable react/no-unescaped-entities */
import './Feautured.css'
import {FiArrowUpRight} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Feautured = () => {
  
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ud&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en';

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  

  console.log(data);

  if (!data) return null

  return (
    <div className='featured'>
      <div className="container">
        {/* left */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <div className="btn">See More Coins</div>
        </div>
        {/* right */}

        <div className="right">
          <div className="top">
            {/* <img src={btc} alt="/" /> */}
            <img src={data[0].name} alt="" />
            <div>
              {/* <h5>{data[0].name}</h5> */}
              <p>$49</p>
            </div>
            <span><FiArrowUpRight />2.5%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feautured