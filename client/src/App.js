import './App.css';

import { Routes, Route } from 'react-router-dom'

// Sayfalarımız
import AnaSayfa from './Pages/AnaSayfa';
import Giris from './Pages/Giris';
import KayitOl from './Pages/KayitOl';
import Cikis from './Pages/Cikis';
import Dashboard from './Pages/Dashboard'

import Navbar from './Components/Navbar';
import AuthRequired from './Components/AuthRequired';


function App() {

  return (
    <>

      <Navbar></Navbar>

      <Routes>

   

      {/* public routes */}
      
      <Route element={<AuthRequired onlyIndex={true} > </AuthRequired>}>  
      <Route path='/' element={<AnaSayfa></AnaSayfa>} ></Route>
      </Route>
     
      <Route path='/giris' element={<Giris></Giris>} ></Route>
      <Route path='/kayit-ol' element={<KayitOl></KayitOl>} ></Route>
      <Route path='/cikis' element={<Cikis></Cikis>} ></Route>


      {/* private routes (yetkilendirme gerektiren) */}
      <Route element={<AuthRequired></AuthRequired>}>  

          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>


      </Route>
      
      
      
      </Routes>
  
    </>
  );
}

export default App;
