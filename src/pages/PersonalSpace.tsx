import { useContext, useEffect } from 'react';
import { Avatar, Badge, Box, Button, Flex, Stack, Text, useDisclosure } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { colors } from '../assets/colors';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import LogoutAlert from '../components/LogoutAlert';
import GameSection from '../components/GameSection';


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

        <Stack className="bg-white/10 col-span-9 rounded-lg p-6" flex="1" pl={'5%'}>
          
          <Box id="user-info" mb={8}>
            <Text fontSize={30} fontWeight="bold" py={4} textTransform="uppercase">User Information</Text>
            <Flex alignItems="center" mb={4}>
              <Box rounded="full" mr={4}>
                <Avatar
                  src={user?.imageUrl || ""}
                  name={user?.userName}
                  size={{base:"md", md:'xl'}}
                />
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="bold">{user?.userName}</Text>
                <Text color="gray.400">{user?.email}</Text>
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
