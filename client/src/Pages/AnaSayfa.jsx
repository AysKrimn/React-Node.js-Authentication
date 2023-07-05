import React from 'react'
import useAuth from '../Hooks/useAuth'


export default function AnaSayfa() {

  const { auth } = useAuth()

  console.log("anasayfaadaki token:", auth)

  return (

    <>

       

        <div className='site-container'>

        <h1>AnaSayfa</h1>  

        </div>
    </>
  
  )
}
