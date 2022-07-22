import '../../styles/admin.css'
var React = require('react');
var ReactDOM = require('react-dom');
import { useEffect, useState} from 'react';
var ReactRouterDOM = require('react-router-dom');
import { Link, useParams} from 'react-router-dom';

import add_circle from '../../imgs/add_circle.png'
import shopping_cart_icon from '../../imgs/shopping_cart_icon.png'
import wishlist_icon from '../../imgs/wishlist_icon.png'
export default function ProductDetail() {
  const [animal, setAnimal] = useState({ name: "", species: "" })
  let { id } = useParams()
    return(
      <>

    <div className='container-fluid gx-0 p-0 m-0'>
      <h1 className='m-2'>Game Title and ID</h1>
      <div className='row'>
        <div className='col-sm-9 col-md-9 col-lg-9 d-flex flex-column m-2 p-2'>



        </div>


        </div>


    </div>

  </>
)
}

//function highChartsRender() {

//}

 