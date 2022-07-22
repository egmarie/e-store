import '../../styles/admin.css'
import '../../styles/main.scss'
import '../../styles/range-slider.scss'
var React = require('react');
import {useEffect, useState, useReducer, useContext, useRef, useCallback} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
const axios = require('axios')
import {CartContext } from '../../index.js'

import {getProducts, ProdContext} from '../api_services/axios'

const {Link, Route, Routes} = ReactRouterDOM

import add_circle from '../../imgs/add_circle.png'
import shopping_cart_icon from '../../imgs/shopping_cart_icon.png'
import wishlist_icon from '../../imgs/wishlist_icon.png'

export default function ProductList(props) {
    const cartContext = useContext(CartContext)
    /*<span className="material-symbols-outlined">
  add_circle
  </span>  */
    return(
      <>
      <li key={`${props.id}`} className='no-list-style p-0 m-3 p-3 list-item bg-white'>
        <div className='m-0 p-0 d-flex flex-column flex-fill '>
  
          <div className='bg-light m-0 p-0 mb-3 d-flex justify-content-end align-items-start img-holder'>
            <button className='m-0 btn p-0 d-flex justify-content-end align-items-center wishlist_icon_div'><img className='icons m-2' src={wishlist_icon} /></button>
  
         </div>
          
        <div className='container gx-0 m-0 p-0'>
          <div className='row d-flex flex-row m-0 p-0 justify-content-center align-items-center'>
              <div className='col-9 col-sm-9 p-0 me-auto d-flex flex-column justify-content-center align-items-start list-item-title'>
                <h5 className='d-flex text-start'>{props.name}</h5>
                <h6>{props.price}</h6>
                </div>
              <div className='col-3 col-sm-3  p-0 d-flex justify-content-end'>
                <button className='m-0 btn p-0 flex-fill btn-icon' onClick={() => cartContext.cartDispatch( {types: 'ADD', id: props.id, name: props.name, price: props.price, season: props.season, type: props.type, dateAdded: Date.now(), productInstance: Date.now(), pic: 'media/' + props.pic, quantity: 1, totalPrice: props.price})}><img className='icons' src={add_circle} /></button>
              </div>
          </div>
        </div>
        </div>
      </li>
      
      </>
    )
  }