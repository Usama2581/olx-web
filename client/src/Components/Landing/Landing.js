import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.css'
import { googleLogin } from '../../config/Firebase'
import { fbLogin } from '../../config/Firebase'


function Landing() {

    const navigate = useNavigate()

    const glogin = async () => {
        try {
            const result = await googleLogin()
            navigate('/home')
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const flogin = async () => {
        try {
            const result = await fbLogin()
            navigate('/home')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container'>
            <div className='btn'>
            
            <img src='/logo1.jpg' alt='' className='img1' />
            <p className='heading'>WELCOME TO OLX</p>
            <p className='txt'>The trusted community of buyers and sellers</p>
            
                <div className='box' onClick={flogin} >
                    <img src='/fb.png'
                        className='icon1'
                    />
                    <p className='txt1'>Sign in with Facebook</p>
                </div>

                <div className='box' onClick={glogin} >
                    <img src='/google.png'
                        className='icon2'
                    />
                    {/* <img src="" alt="" /> */}
                    <p className='txt2'>Sign in with Google</p>
                </div>

                <div className='box'
                    onClick={() => navigate('Login')}>
                    <img src='/email.png'
                        className='icon3'
                    />
                    <p className='txt3'>Login via OLX</p>
                </div>
            </div>
        </div>
    )
}

export default Landing