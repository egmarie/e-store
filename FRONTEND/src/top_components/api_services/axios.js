import React, {useEffect, useState} from 'react';
var ReactDOM = require('react-dom'); 
const axios = require('axios').default;


export default function getProducts() {
  let PRODUCTS 
  //const [products, getProd] = useState()
  const getProds = async () => {
  await axios.get('http://localhost:8000/shop/api', {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  )
  .then(function (response) {
    // handle success
    console.log(response.data.products)
    PRODUCTS = response.data.products 

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
getProds()
      return PRODUCTS
}



