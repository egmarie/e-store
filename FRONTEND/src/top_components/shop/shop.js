import '../../styles/admin.css'
var React = require('react');
import {useEffect, useState, useReducer} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
const axios = require('axios').default;

import ProductDetail from './detail'
import {getProducts, ProdContext} from '../api_services/axios'


const {Link, Route, Routes} = ReactRouterDOM

export default function Shop() {

const [PRODUCTS, getPRODUCTS] = useState([])
const [data, setData] = useState(PRODUCTS)
const [sortType, setSortType] = useState('priceLH');
const [filteredData, setFilteredData] = useState([])

//const [filters, setFilters] = ([])
const [priceRange, setPriceRange] = useState([
  {underFifty: []},
  {fifty_oneHundred: []},
  {hundredOne_oneFifty: []},
  {oneFiftyOne_twoFifty: []},
  {over_twoFifty: []} 
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
    title: "under50",
    type: "price",
    filter: false,
    min: 0,
    max: 50 
  },
  {
    id: 5,
    title: "51to100",
    type: "price",
    filter: false,
    min: 51,
    max: 100 
  },
  {
    id: 6,
    title: "101to150",
    type: "price",
    filter: false,
    min: 101,
    max: 150 
  },
  {
    id: 7,
    title: "150to250",
    type: "price",
    filter: false, 
    min: 151,
    max: 250
  },
  {
    id: 8,
    title: "over250",
    type: "price",
    filter: false, 
    min: 251,
    max: 1000
  }
];

const reducer = (state, action) => {
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

const [filters, dispatch] = useReducer(reducer, initialTypes);

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
          <div className='col-3 ps-4 pe-3 py-4 d-flex flex-column p-1 align-items-start justify-content-start'>
            <SearchSideBarWomens filters={filters} dispatch={dispatch} reducer={reducer} />
            <SearchSideBarSizes filters={filters} dispatch={dispatch} reducer={reducer} />
            <SearchSideBarPrices filters={filters} dispatch={dispatch} reducer={reducer} setPriceRange={setPriceRange} />

          </div>


          <div className='col-9 bg-light'>
          <div className="App">
              <select onChange={(e) => setSortType(e.target.value)}> 
                  <option value="priceLH">Prices Low to High</option>
                  <option value="priceHL">Prices High to Low</option>
                </select>

              <ul className='m-0 p-0 pt-2 pb-5 ps-4 d-flex flex-row justify-content-start align-items-center flex-wrap'>
            {PRODUCTS.map(prod => 
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


      let reducer = props.reducer
      let dispatch = props.dispatch
      let filters = props.filters

      const handleFilterSwitch = (filter1) => {
        dispatch({ type: "FILTER", id: filter1.id });
      };

      let typeFilters = filters.filter(filter1 => filter1.type === 'types')


  return(
    <>
    <div className='d-flex flex-column justify-content-start align-items-start'>
      <h5>Women's Clothing</h5>

            {typeFilters.map((filter1 =>
                  <div key={filter1.id} className="form-check ms-3">
                      <input className="form-check-input" type="checkbox" checked={filter1.filter} value={filter1.type} onChange={() => handleFilterSwitch(filter1)} id="flexCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                          {filter1.title}
                      </label>
                    </div>
              ))}

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
            <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
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
  let reducer = props.reducer
  let dispatch = props.dispatch
  let filters = props.filters

  const handleFilterSwitch = (filter1) => {
    dispatch({ type: "FILTER", id: filter1.id });
  };

  let priceFilters = filters.filter(filter1 => filter1.type === 'price')
  //console.log("PRICE FILTERS")
  //console.log(filters)
  return(
    <>
    <div className='d-flex flex-column justify-content-start align-items-start'>
    <h5>Prices</h5>

    {priceFilters.map((filter1) =>
      <div key={`${filter1.id}`} className="form-check ms-3">
            <input className="form-check-input" type="checkbox" value="underFifty" checked={filter1.filter} onChange={() => handleFilterSwitch(filter1)} id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
              {`${filter1.title}`}
              </label>
            </div>
)}


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

