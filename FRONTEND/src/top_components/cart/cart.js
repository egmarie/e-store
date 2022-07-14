import '../../styles/admin.css'
var React = require('react');
var ReactRouterDOM = require('react-router-dom')
var ReactDOM = require('react-dom');
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function ManageUsers() {
  return(
  <>
    <NextGameControls />
  </>
  )
}

const NextGameControls = () => (
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

