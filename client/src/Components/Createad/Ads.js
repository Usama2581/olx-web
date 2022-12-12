import React, { useEffect, useState } from 'react'
import { postAd } from '../../config/Firebase'
import Header from '../Header/Header'
import axios from 'axios'
import Footer from '../Footer/Footer'
import './ads.css'

function Ads() {

    let [adsDetails, setAdsDetails] = useState({})
    // let [image, setImage] = useState()


    const updateAd = (e, key) => {
        setAdsDetails({ ...adsDetails, [key]: e.target.value })
    }

    const handleFiles = async (e) => {
        const url = e.target.files[0]
        try {
            const uri = await postAd(url)
            // alert('')
            setAdsDetails({ ...adsDetails, ['img']: uri })
        } catch (error) {
            console.log(error.message)
        }
    }

    // console.log(adsDetails)



    const done = (res) => {
        alert('ad posted')
        setAdsDetails({ title: '', price: '', description: '', location: '' })
        console.log(res)
    }


    const submit = () => {
        if (!adsDetails.title || !adsDetails.description || !adsDetails.price || !adsDetails.location) {
            alert('All fileds are manadatory')
        }
        else {
            // console.log(adsDetails)
            axios.post('https://average-crown-ant.cyclic.app/ads/insert', adsDetails)
                .then(res => done(res))
                .catch(err => console.log(err))
        }
        // setAdsDetails('')

    }




    return (
        <>
        <Header />
            <div className="main">
            
                
                <div className="form">
                    <img src="/olx.png" alt="" srcset="" className='olx' />
                    <h4>Sell on OLX</h4>
                        <input type="text" placeholder='Title' onChange={(e) => updateAd(e, 'title')} value={adsDetails.title} required='true' className='field'/>
                        
                        <input type="tel" placeholder='Price' onChange={(e) => updateAd(e, 'price')} value={adsDetails.price} required='true' className='field'/>
                        
                        <input type="text" placeholder='Location' onChange={(e) => updateAd(e, 'location')} value={adsDetails.location} required='true' className='field'/>
                        
                    
                        <input type="text" placeholder='Description' onChange={(e) => updateAd(e, 'description')} value={adsDetails.description} required='true' className='field'/>
                        
            
                    <input type="file" onChange={handleFiles} className='file'/>
                    <button onClick={submit} className='bttn'>Post Ad</button>

                </div>

            </div>

            {/* <img src={adsDetails.img} alt="o" /> */}
            <Footer />
        </>
    )
}

export default Ads