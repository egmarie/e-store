import '../../styles/admin.css'
import '../../styles/main.scss'
import '../../styles/range-slider.scss'
var React = require('react');
import {useEffect, useState, useReducer, useContext, useRef, useCallback} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
const axios = require('axios')
import {CartContext } from '../../index.js'

import ProductDetail from './detail'
import {getProducts, ProdContext} from '../api_services/axios'

import dress1 from '../../imgs/dress1.png'
import edress2 from '../../imgs/edress2.png'
import dress3 from '../../imgs/dress3.png'
import epants from '../../imgs/epants.png'
import eshorts from '../../imgs/eshorts.png'
import add_circle from '../../imgs/add_circle.png'
import shopping_cart_icon from '../../imgs/shopping_cart_icon.png'
import wishlist_icon from '../../imgs/wishlist_icon.png'
const {Link, Route, Routes} = ReactRouterDOM
import SearchSideBarWomens from './filters/filter_womens';
import SearchSideBarSizes from './filters/filter_sizes';
import SearchSideBarPrices from './filters/filter_prices';
import ProductList from './product_map_item';


export default function Shop() {
  const cartContext = useContext(CartContext) 

  useEffect(() => {
    console.log("CART")
    console.log(cartContext.shoppingCart)
    console.log(cartContext)
  }, [cartContext])
 

const [PRODUCTS, getPRODUCTS] = useState([])
const [data, setData] = useState(PRODUCTS)
const [sortType, setSortType] = useState('priceLH');
const [filteredData, setFilteredData] = useState([])

//const [filters, setFilters] = ([])
const [priceRange, setPriceRange] = useState([
  {underFifty: []},
])

const initialTypes = [
  {
    id: 1,
    title: "bottoms",
    type: "types",
    filter: false,
  },
  {
    id: 2,
    title: "dresses",
    type: "types",
    filter: false,
  },
  {
    id: 3,
    title: "tops",
    type: "types",
    filter: false, 
  },
  {
    id: 4,
    title: "over250",
    type: "price",
    filter: false, 
    min: 0,
    max: 500 
  }
];

const reducerTypes = (state, action) => {
  switch (action.type) {
    case "FILTER":
      return state.map((filter1) => {
        if (filter1.id === action.id) {
          return { ...filter1, filter: !filter1.filter };
        } else {
          return filter1;
            }
          });
        default:
      return state;
    }

};

const [filters, dispatch] = useReducer(reducerTypes, initialTypes);

const [sortSizes, setSortSizes] = useState([
  {s: false},
  {m: false},
  {l: false},
  {xl: false},
  {xxl: false}
])





    const getProds = async () => {
    await axios.get('http://localhost:8000/shop/api', {
        headers: {
            'Content-Type': 'application/json'
        }
      }) .then(function (response) {
      // handle success
      console.log("INSIDE")
      console.log(response.data.products)
      let da = response.data.products
      getPRODUCTS([...da].sort((a, b) => a.price - b.price))
  
    }) .catch(function (error) {
      // handle error

      console.log(error);
    })
    return( PRODUCTS, data )
  }
  // PRODUCT FETCHING
  useEffect(() => {
    getProds()
  }, [getPRODUCTS])


  console.log("OUTSIDE")
  console.log(PRODUCTS, sortType)

 
// SORTING
  useEffect(() => {
    const sortArray = (type) => {

      const sortedLH = [...PRODUCTS].sort((a, b) => a.price - b.price);
      const sortedHL = [...PRODUCTS].sort((a, b) => b.price - a.price);
      type === 'priceHL' ? getPRODUCTS(sortedHL) : getPRODUCTS(sortedLH)
    }

  sortArray(sortType)
  }, [sortType]) 

//call this master function everytime the filters change, which are up top, and will 

  function FilterContainer(data) { 
    
    let trueTypeFilters = filters.filter(f_item => f_item.filter === true && f_item.type ==='types')
    let truePriceFilters = filters.filter(f_item => f_item.filter === true && f_item.type ==='price')
      console.log("FILTERS")
      console.log(trueTypeFilters)
      console.log(truePriceFilters)
      
      let TPF
      let TTF
      let TF
      let TTFtotal 
      let merged
      let typeFilter
      let priceFilter
      let totalFilter
    
        
          if (trueTypeFilters.length > 0 && truePriceFilters.length > 0) {

            function start() {
             TPF = data.filter(item => {
              truePriceFilters.map(trueF =>{

                  priceFilter = item.price > trueF.min && item.price < trueF.max
                }
              )
              return priceFilter
            })
             
             //console.log(TPF)
              finish(TPF)
            }
             
             function finish(TPF1) {

              console.log(TPF1)
              console.log("second one")

              TF = TPF1.filter(item => {
                 trueTypeFilters.map(trueF => {
               
                  totalFilter = item.type === trueF.title
                 })
                 return totalFilter
             })
             console.log(TF)
             return totalFilter
             }
              start()
          
             

            //console.log("TOTAL")
            
            
            
        } else if (trueTypeFilters.length > 0) {
        
            TF = data.filter(item => {
          trueTypeFilters.map(trueF => {
        
           typeFilter = item.type === trueF.title
          })
          console.log("TYPE")
          return typeFilter
      })
    } else if (truePriceFilters.length > 0) {
        TF = data.filter(item => {
          truePriceFilters.map(trueF => {

           priceFilter = item.price > trueF.min && item.price < trueF.max
          })
          console.log("PRICE")
          return priceFilter
         })
      } else {
        console.log("no filters")
      }
      
      merged = [].concat.apply([], TF);
      console.log("AHHHHHH")
      console.log(merged)
      return console.log(merged)
    }
      
      



  useEffect(() => {
    FilterContainer(PRODUCTS)
  }, [filters]) 


  

  //FilterMinMax(PRODUCTS, 150, 200) 

  return(

    <>
    
      <div className='container-fluid gx-0 p-0 m-0'>
        <div className='row'>
          <div className='col-md-3 col-lg-3 col-xl-3 px-5 py-4 d-flex flex-column p-1 align-items-start justify-content-start'>

              <nav className="navbar navbar-expand-lg navbar-light bg-white">

                   <button className="navbar-toggler d-flex d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none" type="button" data-bs-toggle="collapse" data-bs-target="#FilterList" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span>
              Filters</span>
                 </button>

                <div className="collapse multi-collapse navbar-collapse" id="FilterList">

                  <h4 className='d-none d-sm-none'>Filters</h4>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column justify-content-center align-items-start">
            <li>
                <SearchSideBarWomens filters={filters} dispatch={dispatch} reducer={reducerTypes} cartContext={cartContext} />
            </li>
            <li>
                <SearchSideBarSizes filters={filters} dispatch={dispatch} reducer={reducerTypes} />
            </li>
            <li>
                <SearchSideBarPrices filters={filters} dispatch={dispatch} reducer={reducerTypes} setPriceRange={setPriceRange} cartContext={cartContext} min={0} max={500} onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
            </li>
          </ul>
                  </div>



               </nav>
          </div>


          <div className='col-md-9 col-lg-9 col-xl-9  bg-light'>
          <div className="App">
            <div className='d-flex justify-content-end align-items-center mt-3 mx-5 mb-1'>
              <select onChange={(e) => setSortType(e.target.value)}> 
                  <option value="priceLH">Prices Low to High</option>
                  <option value="priceHL">Prices High to Low</option>
                </select>
                </div>

              <ul className='m-0 p-0 pt-2 pb-5 ps-4 d-flex flex-row justify-content-start align-items-center flex-wrap'>
            {PRODUCTS.map(prod => 
              <ProductList prods={data} prod={prod} id={prod.id} name={prod.name} price={prod.price} type={prod.type} season={prod.season} sale={prod.sale} key={prod.id} pic={prod.pic} />
              )}
            </ul>

          </div>
        </div>

      </div>
      </div>

    </>
  )
}




