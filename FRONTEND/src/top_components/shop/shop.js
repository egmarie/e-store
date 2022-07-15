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


          </div>


          <div className='col-9 bg-light'>
          <ul className='m-0 p-0 d-flex flex-row justify-content-start align-items-center flex-wrap'>
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
    <li key={`${props.id}`} className='no-list-style p-0 m-3 p-3 list-item bg-white'>
      <div className='m-0 p-0 d-flex flex-column flex-fill '>

        <div className='bg-secondary m-0 p-0 mb-3 justify-content-center align-items-center'>
          <button className='m-0 btn p-0 d-flex justify-content-end align-items-start'>Wishlist</button>

       </div>
        
      <div className='container gx-0 m-0 p-0'>
        <div className='row d-flex flex-row m-0 p-0 justify-content-center align-items-center'>
            <div className='col-9 col-sm-9 p-0 me-auto d-flex flex-column'>
              <h6>{props.name}</h6>
              <h4>{props.price}</h4>
              </div>
            <div className='col-3 col-sm-3  p-0 d-flex justify-content-end'>
              <button className='m-0 btn p-0 flex-fill btn-icon'>a</button>
            </div>
        </div>
      </div>
      </div>
    </li>
    
    </>
  )
}
function SearchSideBarWomens(props) {

  return(
    <>
    <h3>Women's Clothing</h3>
      <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
              Dresses
              </label>
            </div>
      <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            Tops
            </label>
          </div>
    <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            Bottoms
            </label>
          </div>
    <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            Sweaters and Cardigans
            </label>
          </div>

    </>
  )
}

function SearchSideBarSizes(props) {

  return(
    <>
    <h3>Sizes</h3>
      <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
              S
              </label>
            </div>
      <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            M
            </label>
          </div>
    <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            L
            </label>
          </div>
    <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            XL
            </label>
          </div>
     <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label class="form-check-label" for="flexCheckChecked">
            XXL
            </label>
          </div>

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