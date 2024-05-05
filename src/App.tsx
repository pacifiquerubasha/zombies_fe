import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import React, { Suspense, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { AppContext } from './AppContext'
import { Spinner, Stack } from '@chakra-ui/react'
import { colors } from './assets/colors'
const Resources = React.lazy(() => import('./pages/Resources'));
const Courses = React.lazy(() => import('./pages/Courses'));
const CourseDetails = React.lazy(() => import('./pages/CourseDetails'));
const PersonalSpace = React.lazy(() => import('./pages/PersonalSpace'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));

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

  const FallBack = () => {
    return (
      <Stack color={colors.black} w={'100%'} h={'100vh'} justify={'center'} align={'center'}>
        <Spinner size={'xl'} colorScheme='red'/>
      </Stack>
    )
  }

  return (
    <AppContext.Provider value={values}>
      <Suspense fallback={<FallBack/>}>
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
      </Suspense>
    </AppContext.Provider>
  )
}

export default App
