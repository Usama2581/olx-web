import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
// import { getAd } from '../../config/Firebase'
import Footer from '../Footer/Footer'
function Details() {
  
    const[ad, setAd] = useState()
    // const [id, setId] = useState()
    const params = useParams()
    let { adId } = params
    // setId(adId)
    // console.log(adId)

    
    useEffect(() => {
      axios.get(`https://average-crown-ant.cyclic.app/ads/one/${adId}`)
      .then(res => setAd(res.data))
      .catch(err => console.log(err))
    }, [])

    if(!ad){
        return <h2>Loading...</h2>
    }

    let{ img, title, price, description, location } = ad
  return (
    <div>
       <Header/>
       <img src={img} />
       <h1>{title}</h1>
       <h3>Price</h3><p>{price}</p>
       <h3>Location</h3>
       <p>{location}</p>
       <h3>Description</h3>
       <p>{description}</p>
       <Footer/>
    </div>
  )
}

export default Details