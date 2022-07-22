import '../../../styles/admin.css'
import '../../../styles/main.scss'
var React = require('react');
import {useEffect, useState, useReducer, useContext, useRef, useCallback} from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
const axios = require('axios')
import {CartContext } from '../../../index.js'

import ProductDetail from '../detail'
import {getProducts, ProdContext} from '../../api_services/axios'

const {Link, Route, Routes} = ReactRouterDOM

export default function SearchSideBarSizes(props) {

    return(
      <>
      <div className='d-flex flex-column justify-content-start align-items-start mb-3'>
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