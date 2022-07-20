import '../../styles/admin.css'
var React = require('react');
var ReactRouterDOM = require('react-router-dom')
var ReactDOM = require('react-dom');
import { useEffect, useState, useReducer, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../index.js'


export default function Cart() {
  const cartContext = useContext(CartContext)
  console.log("CART LOG")
  console.log(cartContext.shoppingCart)
  return(
  <>
      <ul className='no-list-style'>
          {cartContext.shoppingCart.map(item => <OrderList item={item} id={item.id} numberOrdered={item.numberOrdered} price={item.price} type={item.type} season={item.season} name={item.name} key={item.productInstance} /> )}

      </ul>
    <OrderSummary />
  </>
  )
}

const OrderList = (props) => {
  return(
    <>
    <li id={`${props.prodInstance}`}>
        <h3>{props.name}</h3>
        <h4>${props.price}</h4>
        <div className='rounded-pill d-flex align-items-center justify-content-center border p-1' id='ChangeProductNumberCart'>
          <button className='btn m-0 p-0 btn-icon rounded-circle bg-secondary text-light ChangeProductNumberCart'>-</button>
          <h5 className='m-0 px-4'>{props.numberOrdered}</h5>
          <button className='btn m-0 p-0 btn-icon d-flex justify-content-center align-items-center rounded-circle bg-secondary text-light ChangeProductNumberCart'>+</button>
        </div>
        

    </li>
    </>
  )
}

const OrderSummary = () => (
  <>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                
            </div>


            <div className='col p-3 m-5'>
            <div className=''>
                    <h2>Order summary</h2>
                    <div className='border-bottom d-flex mt-4'>
                        <h6>Subtotal</h6>
                        <h6 className='ms-auto'><b>{`$218`}</b></h6>
                    </div>
                    <div className='border-bottom d-flex mt-4'>
                        <h6>Estimated Total</h6>
                        <h6 className='ms-auto'><b>{`$218`}</b></h6>
                        
                    </div>
                    <div className='d-flex justify-content-end'>
                    <button className='btn'>
                        Checkout
                    </button></div>
                </div>
        </div>
        </div>
      </div>

  </>
)

