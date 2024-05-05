import { lazy, useContext, useEffect } from 'react';
import { Avatar, Badge, Box, Button, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { colors } from '../assets/colors';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';


const LogoutAlert = lazy(() => import('../components/LogoutAlert'));
const GameSection = lazy(() => import('../components/GameSection'));


const PersonalSpace = () => {

    const {user} = useContext(AppContext);
    const navigate = useNavigate();


    useEffect(()=>{
      const userId = localStorage.getItem("zombie__user");
      if(!userId){
        navigate('/')
      }
    }, [])

    const {isOpen:isOpenLogout, onOpen:onOpenLogout, onClose:onCloseLogout} = useDisclosure(); 

  return (
    <Layout>
      <Flex minH={'100vh'} pos={'relative'} py={4} pt={{base:"15vh", md:"20vh"}} color={colors.brown} px={{base:'5%', md:'10%'}}>

        <Stack overflow={'hidden'} className="bg-white/10 col-span-9 rounded-lg p-6" pl={{base:0, md:'5%'}}>
          
          <Box id="user-info" mb={8} w={'100%'} >
            <Text fontSize={{base:20, md:24, lg:30}} fontWeight="bold" py={4} textTransform="uppercase">User Information</Text>
            <Flex alignItems="center" mb={4}>
              <Box rounded="full" mr={4}>
                <Avatar
                  src={user?.imageUrl || ""}
                  name={user?.userName}
                  size={{base:"md", md:'xl'}}
                  loading="lazy"
                />
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold">{user?.userName}</Text>
                <Text fontSize={{base:14, md:16}} color="gray.400">{user?.email}</Text>
                <Badge colorScheme={user?.isVerified ? "green": "red"}>{user?.isVerified ? "Active": "Unverified"}</Badge>
              </Box>
            </Flex>
          </Box>

          <GameSection/>
          
          <Button colorScheme='red' mr={'auto'} onClick={onOpenLogout}>LOGOUT</Button>
          <LogoutAlert
            isOpen={isOpenLogout}
            onClose={onCloseLogout}
          />
        </Stack>
        
      </Flex>
    </Layout>
  );
};

export default PersonalSpace;
