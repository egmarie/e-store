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


export default function SearchSideBarWomens(props) {


    let reducer = props.reducerTypes
    let dispatch = props.dispatch
    let filters = props.filters

    const handleFilterSwitch = (filter1) => {
      dispatch({ type: "FILTER", id: filter1.id });
    };

    let typeFilters = filters.filter(filter1 => filter1.type === 'types')


return(
  <>
  <div className='d-flex flex-column justify-content-start align-items-start mb-3'>
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

//https://codesandbox.io/s/pd5kg?file=/src/component/multiRangeSlider/multiRangeSlider.css

