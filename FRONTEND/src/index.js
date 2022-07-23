import './styles/main.scss'
import './styles/range-slider.scss'

var React = require('react');
import { useEffect, useState, useReducer, useContext} from 'react';
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

import shopping_cart_icon from './imgs/shopping_cart_icon.png'
import burger_menu from './imgs/burger-md-menu.png'




export const CartContext = React.createContext()
const initialState = []

const reducer = (state, action) => {
  switch (action.types) {

  case 'ADD':
    if  (state.some(element => (element.id === action.id))) {
      return ( state.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      })
      )
      } else {
        return(
          [...state, {
          productInstance: action.productInstance,
          dateAdded: action.dateAdded,
          id: action.id,
          name: action.name,
          price: action.price,
          season: action.season,
          type: action.type,
          quantity: action.quantity,
          totalPrice: action.price,
          pic: action.pic
      }]
      )

        
    }
  case 'INCREASE_QUANTITY':
      return( state.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      })
      ) 
  case 'DECREASE_QUANTITY':
      return( state.map((item) => {
        console.log(item.id)
        console.log(action.id)
        if (item.id === action.id) {

            return { ...item, quantity: item.quantity - 1};
          } else {
            return item;
          }
        })
        )
  case 'DELETE':
      return state.filter((_, index) => index != action.index);
  case 'DELETE_ALL':
      return state.map((cartItem) => {
          if (cartItem.id === action.id) {
              return { ...cartItem, complete: !todo.complete };
          } else {
              return todo;
          }
          });

    default:
      return state;

  }
};

function Main() {
  const[cart, dispatch] = useReducer(reducer, initialState)

  
  //const [products, getProds] = useState()
  let products 
  useEffect(() => {
    products = getProducts() 
  })
  
  return(
    <>
        <CartContext.Provider value={{ shoppingCart: cart, cartDispatch: dispatch}}>
          <App products={products} />
        </CartContext.Provider>

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

      <div className="container-fluid p-0 pt-5 m-0 mt-5 gx-0">
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
    
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>






      return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">

            <Link to='/' className={` px-2 justify-content-start navbar-branc nav-link m-0 ${props.isNavActive === 'homePage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('homePage')} id='homePage'><h3 id='fancy'>Hem's Goods</h3></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <img className="border-none" id='burger_menu' src={burger_menu} />
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 pe-5 mb-lg-0 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-start align-items-sm-start justify-content-md-end align-items-md-center align-items-lg-center align-items-xl-center align-items-xxl-center justify-content-lg-end justify-content-xl-end justify-content-xxl-end">
            
               
              
              <li className='m-0 me-4 nav-item px-0' id='navContainer'>
                  <Link to='/shop' className={`px-2 m-0 nav-page nav-link ${props.isNavActive === 'dashboardPage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('dashboardPage')} id='dashboardPage'>Shop</Link>
              </li>
              <li className='m-0 nav-item me-4'>
                <Link to='/about' className={` nav-page px-2 m-0 ${props.isNavActive === 'gameSchedulePage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('gameSchedulePage')} id='gameSchedulePage'>About</Link>
               </li>
              
              <li className='d-flex nav-link justify-content-start align-items-center m-0'>
                <Link to='/cart' className={`px-2 ${props.isNavActive === 'manageUsersPage' ? 'activeNavPage' : ''}`}
                  onClick={e => handleActiveToggle('manageUsersPage')} id='manageUsersPage'><img className='icons' src={shopping_cart_icon} /></Link>
              </li>
       </ul>
      </div>
   
              </nav>
        </>
      )
    }


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);



if (module.hot) {
   module.hot.accept() 
}

/*   <Link to='/manage-users' className='px-4 py-2 border border-white rounded-pill'>Logout</Link>         */