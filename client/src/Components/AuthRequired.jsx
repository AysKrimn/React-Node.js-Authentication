import React, { useEffect } from 'react'
import useAuth from '../Hooks/useAuth'
import { Outlet } from 'react-router-dom'


export default function AuthRequired(props) {

    const { onlyIndex } = props

    const { auth, setAuth } = useAuth()

    useEffect(() => {
    
        if (!auth.length) {

            // tarayıcının localstoragesindne bunu al
            const token = localStorage.getItem('token')

            if (token) {

                setAuth({ token: token })
            }
        }

    }, [])


  return (
    <div>

        {

            auth.token 
            ? 
            
            <Outlet></Outlet> 
            
            : 

                onlyIndex 
                ? 
                <Outlet></Outlet> 
                
                : 

                <h1>Dashboardı göremye iznin yok.</h1>
        }
      
    </div>
  )
}
