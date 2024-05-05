import React, { useContext, useEffect, useState } from 'react';
import { FaListAlt, FaCheckCircle, FaHourglass } from 'react-icons/fa';
import CertificateList from '../components/personal-space/Certificate';
import { Avatar, Badge, Box, Button, Flex, Input, Stack, Text, useDisclosure } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { colors } from '../assets/colors';
import { AppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import LogoutAlert from '../components/LogoutAlert';

interface Props{
    selectedCategory:any,
    setSelectedCategory:any

}


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


          <Box id="course-progress">
            <Text fontSize={30} fontWeight="bold" py={4} textTransform="uppercase">My Courses</Text>
            <Input
              type="text"
              placeholder="Search courses..."
              bg="gray.800"
              color="white"
              px={4}
              py={2}
              rounded="md"
              mb={4}
            />
            <Flex flexWrap="wrap" justifyContent={['center', 'space-between']} gap={4}>
              {/* {filteredCourses?.map((course:any, index) => (
                <Box key={index} bg="blackAlpha.60" rounded="lg" p={6} flex="1 0 45%">
                  <Text fontSize="lg" fontWeight="bold" mb={2}>{course.title}</Text>
                  <Text color="gray.400" mb={2}>{course.description}</Text>
                  <Text color="gray.400" mb={2}>Category: {course.category}</Text>
                  <Text color="gray.400" mb={2}>Duration: {course.duration}</Text>
                  <Box mb={4}>
                    <Box h={4} bg="gray.600" rounded="full">
                      <Box h={4} bg="indigo.400" rounded="full" w={`${course.progress}%`} />
                    </Box>
                    <Text fontSize="sm" color="gray.400">
                      {course.completedLessons}/{course.totalLessons} Lessons Completed
                    </Text>
                  </Box>
                  <Flex justifyContent="space-between">
                    <Button bg="indigo.500" _hover={{ bg: 'indigo.600' }} color="white" fontWeight="bold" py={2} px={4} borderRadius={16}>Continue</Button>
                    <Button bg="gray.600" _hover={{ bg: 'gray.700' }} color="white" fontWeight="bold" py={2} px={4} borderRadius={16}>Details</Button>
                  </Flex>
                </Box>
              ))} */}
            </Flex>
          </Box>

          <Box>
            <CertificateList />
          </Box>
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
