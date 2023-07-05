import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Buton componentini dahil et
import Button from '../Components/Button'


// auth hookunu çağır
import useAuth from '../Hooks/useAuth'

export default function Giris() {

  const { setAuth } = useAuth()





  const yonlendir = useNavigate()

  const [error, setError] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const changeUserNameState = (event) => {

      setUsername(event.target.value)
  }


  const changePasswordState = (event) => {

      setPassword(event.target.value)
  }

  // handle login
  const handleLogin = async (event) => {

    // tarayıcının verdiği değerleri unut
    event.preventDefault()

    const data = {

      kullaniciAdi: username,
      kullaniciSifre: password
    }


    const apiRequest = await fetch("http://localhost:4000/v1/api/login", {

    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)



    })


    // sunucudan gelen isteği al
    const apiResponse = await apiRequest.json()

    if (apiResponse.message.type === "ERROR") {

      // error statesini güncelle
      setError(apiResponse.message.content)
    } else if (apiResponse.message.type === "SUCCESS") {

      // anasayfaya yönlendir 
      setTimeout(() => {
        
        // localde authu güncelle
        localStorage.setItem("token", apiResponse.message.token)
        // cachede authu güncelle
        setAuth({ token: apiResponse.message.token })

        // anasayfaya yönlendir
        yonlendir("/")
      }, 1500);
    }

    console.log("/LOGİN ENDPOINT:", apiResponse)

  }

  return (


    <div className='form-container'>
        
    <h1>Giriş Yap</h1>
    <hr />
    
    <p className='errorClass'>{error}</p>

    <form onSubmit={handleLogin} >

    <input onChange={changeUserNameState} type="text" placeholder='Kullanıcı Adın' value={username} />
    <input onChange={changePasswordState} type="password" placeholder='Şifre' value={password} />

    <p>Hesabın yok mu? <Link to="/kayit-ol"> Buradan kayıt ol</Link>  </p>

    <Button butonName="Giriş Yap"></Button>
    </form>


    </div>
  )
}
