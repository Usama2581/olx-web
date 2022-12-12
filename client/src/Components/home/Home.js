import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Header from '../Header/Header';
import axios from 'axios'
import './home.css'
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';

function Home() {
  
  const navigate = useNavigate()
  // const selector = useSelector()
  const [ads, setAds] = useState([])
  const [ search, setSearch ] = useState(false)
  const [img, setImg] = useState(0)
  const [image, setImage] = useState([
    "https://images.olx.com.pk/thumbnails/302114685-800x600.webp",
    "https://images.olx.com.pk/thumbnails/310378076-800x600.webp"])
    
    
    setInterval(() => {
     if(img === 0) {
       setImg(img + 1)
     }
     else if(img === 1){
       setImg(img - 1)
     }
    }, 5000);
  

  useEffect(() => {
    axios.get('https://average-crown-ant.cyclic.app/ads/')
    .then(res => setAds(res.data))
    .catch(err => console.log(err))

  }, [])


  
  let data = useSelector(state => state.item)
  
  useEffect(() => {
    if(data) {
      setSearch(true)
    }
  }, [data])
  
  

  

  
  
  return (
    <div>
      <Header />
      
      <img src={image[img]} alt="" className='ad'/>
      <img src="https://s0.2mdn.net/simgad/3215411614508323973" alt="" className='ad1'/>
      <h2>Fresh Recommendations</h2>
      <div className='ads' >

        {
          search ?     
              
              data.map(item => {
                return <div onClick={() => navigate(`/details/${item._id}`)} className='item'>
                  <img src={item.img} alt="" width='250' height='250' className='image'/>
                  <p className='title' >{item.title}</p>
                  <h3 className='price'>Rs {item.price}/=</h3>
                  <p className='location'> {item.location}</p>
                </div>
               })
             
            
            : 
            
              ads.map(item => {
               return <div onClick={() => navigate(`/details/${item._id}`)} className='item'>
                 <img src={item.img} alt="" width='250' height='250' className='image'/>
                 <p className='title' >{item.title}</p>
                 <h3 className='price'>Rs {item.price}/=</h3>
                 <p className='location'> {item.location}</p>
               </div>
              })
        }

      </div>
      <Footer/>
      </div>
    
  )
}

export default Home