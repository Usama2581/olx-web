import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import searchItem from '../../Redux/action/searchAction';


function Header() {

  const [ data, setData] = useState()
  const [ search, setSearch ] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const done = () => {
    axios.get(`https://average-crown-ant.cyclic.app/ads/${search}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }
  dispatch(searchItem(data))

  return (
    <>
      <header>
        <img src="/blue.png" alt="" srcset="" className='blue' />
        <img src="/car.png" alt="" srcset="" className='car' />
        <p>Motors</p>
        <img src="/property.png" alt="" srcset="" className='building' />
        <p>Property</p>
      </header>

      <div className='second'>
        <img src="/logo.png" alt="" srcset="" className='logo' />
        <div className='inputbox'>
          <img src="/search2.png" alt="" className='img' />
          <input type="text" className='input1' value='Pakistan' />
        </div>
        <input type="text" className='input' placeholder='What are you looking for..' onChange={(e) => setSearch(e.target.value)} />
        <img src="/search1.png" alt="" className='icon' onClick={done}/>
        <p className='login' onClick={() => navigate('/landing')}>Login</p>
        <button className='sell' onClick={() => navigate('/ads')} > +sell </button>
      </div>

    </>


  )
}

export default Header