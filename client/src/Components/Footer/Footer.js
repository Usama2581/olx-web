import React from 'react'
import './Footer.css'

function Footer() {
  return (
    
      <div className='footer'>
        <div className='one'>
            <h4>POPULAR CATEGORIES</h4>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile phones</li>
            <li>Jobs</li>
        </div>

        <div className='two'>
            <h4>TRENDING SEARCHES</h4>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
        </div>

        <div className='three'>
            <h4>About Us</h4>
            <li>About EMPG</li>
            <li>OLX Blog</li>
            <li>OLX For Bunisess</li>
            <li>Contact us</li>
        </div>

        <div className='four'>
            <h4>OLX</h4>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Term of use</li>
            <li>Privacy Policy</li>
        </div>
      </div>


    
  )
}

export default Footer