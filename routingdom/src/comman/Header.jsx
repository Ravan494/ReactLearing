import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
        <h1>Header</h1>
        <nav>
          
            <ul className='text-center header'>
                <li><Link to={'/'}> Home</Link></li>
                <li><Link to={'/Blog'}> Blog</Link></li>
                <li><Link to={'/About'}> About</Link></li>
                <li><Link to={'/Control-Form'}> Control-Form</Link></li>
                <li><Link to={'/Password-genreter'}> Password-genreter</Link></li>
                <li><Link to={'/Weather'}>Weather</Link></li>
                <li><Link to={'/Product'}>Product</Link></li>
                <li><Link to={'/Try'}>Try</Link></li>
            </ul>
        </nav>
    </div>
  )
}
