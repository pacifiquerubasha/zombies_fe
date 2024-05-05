import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { AppContext } from './AppContext'
import Resources from './pages/Resources'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import PersonalSpace from './pages/PersonalSpace'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

interface Props{
  children: React.ReactNode;
}

const RoutesWrapper:React.FC<Props> = ({children}) => {
  const location = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
      <Routes>
        {children}
      </Routes>
  )
}

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
        <RoutesWrapper>
          <Route path='/' element={<Home/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/courses/:id' element={<CourseDetails/>} />
          <Route path='/additional-resources' element={<Resources/>} />
          <Route path='/personnal-space' element={<PersonalSpace/>} />

          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path='/reset-password/:code' element={<ResetPassword/>} />

        </RoutesWrapper>      
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
