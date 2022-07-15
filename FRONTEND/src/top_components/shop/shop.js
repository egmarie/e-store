import '../../styles/admin.css'
var React = require('react');
import { useEffect, useState , useRef } from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
const axios = require('axios').default;

import ProductDetail from './detail'
import {getProducts} from '../axios'
import ParentGetProducts from '../axios';


const {Link, Route, Routes} = ReactRouterDOM


export default function Shop(props) {
  const products = props.products

  console.log(products)


  return (
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

          </div>
        </div>

      </div>

    </>
  )
}
