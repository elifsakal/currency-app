import React, { useState } from 'react'
import "../css/currency.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_VCjCd95pkDCTuj3PZciIjYWxZ6QDP5o6LhI2px9y";


function Currency () {

    const [amount , setAmount] = useState(1);
    const [fromCurrency , setFromCurrency] = useState("USD");
    const [toCurrency , setToCurrency] = useState("TRY");
    const [result , setResult] = useState(0);

    const exchange = async () => {
        // console.log(amount)
        // console.log(fromCurrency)
        // console.log(toCurrency)

       const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
       const result = (response.data.data[toCurrency] * amount).toFixed(2);
       setResult(result)
       console.log(response.data.data[toCurrency])
    }

  return (
    <div className='currency-div'>
        <div>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number' className='amount'/>
        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">TRY</option>
        </select>
        <FaRegArrowAltCircleRight style={{fontSize: "30px", marginRight: "10px"}}/>
        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
            <option value="">TRY</option>
            <option value="">EUR</option>
            <option value="">USD</option>
        </select>

        <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result'/>
        </div>

        <div>
            <button onClick={exchange} className='exchange-button'>Çevir</button>
        </div>
    </div>
  )
}

export default Currency