const axios = require('axios').default;
var React = require('react');
import { useEffect, useState } from 'react';
import Shop from './shop/shop'

export default function ParentGetProducts() {

  const [products, getProducts] = useState('')

  useEffect(() => {
    getProds()
  }, [])


  const getProds = async () => {
  await axios.get('http://localhost:8000/shop/api', {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  )
  .then(function (response) {
    const allProducts = response.data.products
    // handle success
    console.log(response.data.products)
    getProducts(allProducts)
    console.log(products)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function(response) {
    // always executed
    
  });
}
      return(
        <>
        <Shop products={products} />
        </>
        )
}

/*export const getProducts = async () => {
  await axios.get('http://localhost:8000/shop/api', {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  )
  .then(function (response) {
    console.log(response.data.products)
    // handle success
    return prods
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function(response) {

    // always executed
    console.log("found it")
  });
  return
}*/

