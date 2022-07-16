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
const [sortType, setSortType] = useState('priceLH');
const [data, setData] = useState([])



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


  useEffect(() => {
    const sortArray = (type) => {
      const sortedLH = [...PRODUCTS].sort((a, b) => b[price] - a[price]);
      const sortedHL = [...PRODUCTS].sort((a, b) => a[price] - b[price]);
      type === 'priceHL' ? setData(sortedHL) : setData(sortedLH)
    }
  sortArray(sortType)
  }, [sortType]) 



  return(

    <>
    
      <div className='container-fluid gx-0 p-0 m-0'>
        <div className='row'>
          <div className='col-3 ps-4 pe-3 py-4 d-flex flex-column p-1 align-items-start justify-content-start'>
            <SearchSideBarWomens />
            <SearchSideBarSizes />
            <SearchSideBarPrices />

          </div>


          <div className='col-9 bg-light'>
          <div className="App">
              <select onChange={(e) => setSortType(e.target.value)}> 
                  <option value="priceHL">Prices High to Low</option>
                  <option value="priceLH">Prices Low to High</option>
            </select>
              <ul className='m-0 p-0 pt-2 pb-5 ps-4 d-flex flex-row justify-content-start align-items-center flex-wrap'>
            {data.map(prod => 
              <ProductList prods={data} prod={prod} id={prod.id} name={prod.name} price={prod.price} type={prod.type} season={prod.season} sale={prod.sale} key={prod.id} />
              )}
          

            </ul>

          </div>
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
    <div className='d-flex flex-column justify-content-start align-items-start'>
    <h5>Women's Clothing</h5>
      <div className="form-check ms-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
              Dresses
              </label>
            </div>
      <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Tops
            </label>
          </div>
    <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Bottoms
            </label>
          </div>
    <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            Sweaters and Cardigans
            </label>
          </div>

  </div>

    </>
  )
}

function SearchSideBarSizes(props) {

  return(
    <>
    <div className='d-flex flex-column justify-content-start align-items-start'>
    <h5>Sizes</h5>
      <div className="form-check ms-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
              S
              </label>
            </div>
      <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            M
            </label>
          </div>
    <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            L
            </label>
          </div>
    <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            XL
            </label>
          </div>
     <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            XXL
            </label>
          </div>
      </div>    
          


    </>
  )
}

function SearchSideBarPrices(props) {

  return(
    <>
    <div className='d-flex flex-column justify-content-start align-items-start'>
    <h5>Prices</h5>
      <div className="form-check ms-3">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
              $50 & under
              </label>
            </div>
      <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            $51 - $100
            </label>
          </div>
    <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            $101 - $150
            </label>
          </div>
    <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            $151 - $250
            </label>
          </div>
     <div className="form-check ms-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
            <label className="form-check-label" htmlFor="flexCheckChecked">
            $251 & Over
            </label>
          </div>

          </div>

    </>
  )
}

function TopFilterDropdown(props) {

  return(
    <>
    <div className='d-flex flex-column justify-content-center align-items-end'>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle m-1 mt-3 px-2 py-1 d-flex flex-fill" type="button" id="sortBy" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><a class="dropdown-item" href="#">Price High to Low</a></li>
           <li><a class="dropdown-item" href="#">Price Low to High</a></li>
         </ul>
      </div>
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