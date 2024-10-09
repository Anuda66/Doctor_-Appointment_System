import React from 'react'
import { Button } from 'react-bootstrap';
import './More.css'
import { Link } from 'react-router-dom';

function More() {
  return (
    <div className='container'>
        <div class="text-center">
            ,<Link to='/doctor'><button type="button" class="btn btn-primary1">More</button></Link>
        </div>
    </div>
  )
}

export default More
