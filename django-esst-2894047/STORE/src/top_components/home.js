import '../styles/admin.css'
var React = require('react');
import { useEffect, useState , useRef } from 'react';
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');

const {
  Routes,
  Route,
  Link,
} = ReactRouterDOM


function Home() {



  return(
    <>
  <div className="App">
    <header className="">
      <p>
      <button className='btn'>Hello</button>
      </p>
    </header>
  </div>

    </>
  )
}


export default Home


