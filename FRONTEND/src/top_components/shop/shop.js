import '../../styles/admin.css'
var React = require('react');
import {useEffect, useState} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
const axios = require('axios').default;

import ProductDetail from './detail'
import {getProducts, ProdContext} from '../api_services/axios'


const {Link, Route, Routes} = ReactRouterDOM

export default function Shop() {

const [PRODUCTS, getPRODUCTS] = useState([])

    const getProds = async () => {
    await axios.get('http://localhost:8000/shop/api', {
        headers: {
            'Content-Type': 'application/json'
        }
      }) .then(function (response) {
      // handle success
      console.log("INSIDE")
      console.log(response.data.products)
      getPRODUCTS(response.data.products) 
  
    }) .catch(function (error) {
      // handle error

      console.log(error);
    })
    return PRODUCTS
  }
  useEffect(() => {
    getProds()
  }, [getPRODUCTS])

  console.log("OUTSIDE")
  console.log(PRODUCTS)

  //PRODUCTS.map(prod => console.log(prod))
        

        //<Routes>
        //<Route path={`/detail:pk`} element={<ProductDetail />} />
        //</Routes>

  return(

    <>
    
      <div className='container-fluid gx-0 p-0 m-0'>
        <div className='row'>
          <div className='col-3 d-flex flex-column p-1 align-items-center'>


            <div className='dropdown'>
              <button className='btn btn-secondary dropdown-toggle m-0 container-fluid' type='button'
              id='dropdownMenuButton1'
  data-bs-toggle='dropdown' aria-expanded='false'>
                Dropdown button
              </button>
                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                  <li><a className='dropdown-item' href='#'>Action</a></li>
                  <li><a className='dropdown-item' href='#'>Another action</a></li>
                  <li><a className='dropdown-item' href='#'>Something else here</a></li>
                </ul>
            </div>
          </div>


          <div className='col-9 bg-light'>
          <ul className='m-2'>
          {PRODUCTS.map(prod => 
            <ProductList prods={PRODUCTS} prod={prod} id={prod.id} name={prod.name} price={prod.price} type={prod.type} season={prod.season} sale={prod.sale} key={prod.id} />
            )}
            </ul>

          </div>
        </div>

      </div>

    </>
  )
}

function ProductList(props) {
  return(
    <>
    <li key={`${props.id}`} className='no-list-style'>
      <div className=''>
        <h6>{props.name}</h6>
        <h4>{props.type}</h4>
        <h5>{props.season}</h5>
      </div>
    </li>
    
    </>
  )
}


/*
          <ul className='m-2'>
          {PRODUCTS.map(prod => 
            <ProductList prods={prods} prod={prod} id={prod.id} name={prod.name} price={prod.price} type={prod.type} season={prod.season} sale={prod.sale} />
            )}
            </ul>




*/