import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { AppContext } from './AppContext'

function App() {
  
  useEffect(()=>{
    AOS.init();
  }, [])

  const [user, setUser] = useState(null);

  const values = {
    user,
    setUser
  
  }

  return (
    <AppContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>      
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
