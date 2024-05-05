import { Box } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { colors } from '../assets/colors';
import { AppContext } from '../AppContext';
import { getUser } from '../services/auth';

interface Props{
    children: React.ReactNode;
}

const Layout:React.FC<Props> = ({children}) => {

  const { setUser} = useContext(AppContext);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const fetchUser = async(id:string)=>{
    try {
      const response = await getUser(id);
      if(response.data){
        setUser(response.data.user);
      }
      
    } catch (error) {
      console.log(error)
    }
    finally{setIsLoaded(true)}
  }

  useEffect(()=>{
      const userId = localStorage.getItem("zombie__user");
      if(userId){
        fetchUser(userId)
      }
      else{
        console.log("YY")
        setIsLoaded(true)
      }
  }, [])

    return (
    <Box minH={"100vh"} overflowX={"hidden"} bg={colors.black}>
      {
        isLoaded ? 
        <>
            <Header />    
              {children}
            <Footer/>
        </>
        : null
      }
    </Box>
    );
};

export default Layout;