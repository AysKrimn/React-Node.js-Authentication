import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'


export default function Navbar() {

  const { auth } = useAuth()

  

  return (
    <nav>

          <ul>

            <li>

                <Link to="/">LOGO</Link>
            </li>

            {/* eğer token varsa */}
            {

              auth.token ? 


              <li id='forwardRight'>
              <Link to="/cikis">Çıkış Yap</Link>
              </li>

            : 
            
            <>
            
            <li id='forwardRight'>
                 <Link to="/giris">Giriş Yap</Link>
            </li>

            <li>
                 <Link to="/kayit-ol">Kayıt Ol</Link>
            </li>

            </>

            }
          </ul>


    </nav>
  )
}
