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

export default function SearchSideBarPrices(props) {

    const onChange = props.onChange
    const min = props.min
    const max = props.max
    
    let reducer = props.reducerTypes
    let dispatch = props.dispatch
    let filters = props.filters
    
    const handleFilterSwitch = (filter1) => {
      dispatch({ type: "FILTER", id: filter1.id });
    };
    
    let priceFilters = filters.filter(filter1 => filter1.type === 'price')
    
    
    function handlePriceInput(e) {
      let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);
      
      if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
          if(e.target.className === "input-min"){
              rangeInput[0].value = minPrice;
              range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
          }else{
              rangeInput[1].value = maxPrice;
              range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
      }
    }
    
      const [minVal, setMinVal] = useState(min);
      const [maxVal, setMaxVal] = useState(max);
      const minValRef = useRef(min);
      const maxValRef = useRef(max);
      const range = useRef(null);
    
      // Convert to percentage
      const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
      );
    
      // Set width of the range to decrease from the left side
      useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);
    
        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }, [minVal, getPercent]);
    
      // Set width of the range to decrease from the right side
      useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);
    
        if (range.current) {
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }, [maxVal, getPercent]);
    
      // Get min and max values when their state changes
      useEffect(() => {
        onChange({ min: minVal, max: maxVal });
      }, [minVal, maxVal, onChange]);
    
      
    
    
    return(
      <>
    <div className='mb-5'>
    <h5 className='mb-4'>Price Range</h5>
        <div className="container_range_slider">
    
         
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal - 1);
              setMinVal(value);
              minValRef.current = value;
            }}
            className="thumb thumb--left"
            style={{ zIndex: minVal > max - 100 && "5" }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal + 1);
              setMaxVal(value);
              maxValRef.current = value;
            }}
            className="thumb thumb--right"
          />
    
          <div className="slider">
            <div className="slider__track" />
            <div ref={range} className="slider__range" />
            <div className="slider__left-value">{minVal}</div>
            <div className="slider__right-value">{maxVal}</div>
          </div>
        </div>
        </div>
        
    
      </>
    )
    }
