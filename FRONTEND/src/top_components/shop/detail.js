import '../../styles/admin.css'
var React = require('react');
var ReactDOM = require('react-dom');
import { useEffect, useState} from 'react';
var ReactRouterDOM = require('react-router-dom');


const {Link} = ReactRouterDOM

export default function ProductDetail() {

    return(
      <>

    <div className='container-fluid gx-0 p-0 m-0'>
      <h1 className='m-2'>Game Title and ID</h1>
      <div className='row'>
        <div className='col-sm-9 col-md-9 col-lg-9 d-flex flex-column m-2 p-2'>
          <div id='chart4' className='shadow'>
          
          </div>


        </div>


        <div className='col m-2 d-flex flex-column p-0'>
          <div className='m-2 p-2 shadow'>
            <h4>total players this week</h4>
            <div id='chart_game_total_players'></div>
          </div>
          <div className='m-2 p-2 shadow'>
            <h4>winners</h4>
            <div id='chart_game_winners'></div>
          </div>
          <div className='m-2 p-2 shadow'>
            <h4>prizes claimed</h4>
            <div id='chart_game_prizes_claimed'></div>
          </div>

        </div>
      </div>

    </div>

  </>
)
}

//function highChartsRender() {

//}

 