import './styles/main.scss'
import './styles/calendar.scss'
var React = require('react');
import { useEffect, useState, useReducer} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import getProducts from './top_components/api_services/axios'
//import ROUTES from './ROUTES'

import Home from './top_components/home'
import Shop from './top_components/shop/shop'
import About from './top_components/about'
import Cart from './top_components/cart/cart'
import ProductDetail from './top_components/shop/detail'

import NotFound from './notfound'

function Main() {
  
  //const [products, getProds] = useState()
  let products 
  useEffect(() => {
    products = getProducts() 
  })
  
  return(
    <>

          <App products={products} />

    </>
  )
}

function App(props) {

  const [isNavActive, setNavActive] = useState('dashSeasonPage')

    console.log('react is working')
    return(
        <>


      <BrowserRouter>
      <header className="">
          <AdminNav isNavActive={isNavActive} setNavActive={setNavActive} />
        
      </header>

      <div className="container-fluid p-0 m-0 gx-0">
        <Routes>
          <Route index element={<Home products={props.products}/>} />
          <Route path='/about' element={<About />} />

          <Route path='/cart' element={<Cart products={props.products} />} >
            
            </Route>
          <Route path='/shop' element={<Shop products={props.products} />}>
            <Route path='/shop/:id' element={<ProductDetail products={props.products} />} />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      
      </div>

      <footer className="border-top pt-3">
        <p className="small text-center text-muted">
          <Link className="text-muted mr-1 p-3 footerLinks" to="/">
            Home
          </Link>
        </p>
      </footer>
      </BrowserRouter>

        </>
        

        )
    }

    function AdminNav(props) {
      function handleActiveToggle(id) {
        props.setNavActive(id)
      }
    
      return (
        <>
          <div className='container-fluid gx-0 bg-dark text-light p-3'>
    
            <div className='row'>
    
              <div className='col-2'>
                <Link to='/' className={`px-2 justify-content-start m-0 ${props.isNavActive === 'homePage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('homePage')} id='homePage'>ATL Logo</Link>
              </div>
    
              <div className='col-8 m-0 px-0 d-flex justify-content-center align-items-center' id='navContainer'>
                <Link to='/shop' 
            className={`px-2 ${props.isNavActive === 'dashboardPage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('dashboardPage')} id='dashboardPage'>Shop</Link>
    
                <Link to='/about' className={`px-2 ${props.isNavActive === 'gameSchedulePage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('gameSchedulePage')} id='gameSchedulePage'>About</Link>
    
              </div>
    
              <div className='col-2 d-flex justify-content-start align-items-center m-0'>
                <Link to='/manage-users' className='px-4 py-2 border border-white rounded-pill'>Logout</Link>
                <Link to='/cart' className={`px-2 ${props.isNavActive === 'manageUsersPage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('manageUsersPage')} id='manageUsersPage'>Cart</Link>
              </div>
            </div>
          </div>
        </>
      )
    }


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);



if (module.hot) {
   module.hot.accept() 
}

/*           */