import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'


export default function Cikis() {

  const { setAuth } = useAuth()
  const yonlendir = useNavigate()
  const [yonlenirme, setYonlendirme] = useState(false)


  useEffect(() => {

    setAuth({})
    // localden sil
    localStorage.removeItem('token')
    setYonlendirme(true)

  }, [setAuth])



  return (
    
    <div>

    {
        yonlenirme ? yonlendir("/") : null
    }
    </div>


  )
}
