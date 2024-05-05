import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, InputGroup, InputLeftElement, Stack, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../assets/colors';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../services/auth';

import axios from 'axios';
import { LuAtSign } from 'react-icons/lu';

interface ForgotData {
    userName: string
}
const ForgotPassword: React.FC<{}> = ()=>{


    const toast = useToast();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgotData>();


    const handleResetPassword = async(data:ForgotData) => {

        try{
            const response = await forgotPassword(data.userName);
            if(response.data){
                toast({
                    description: "An email has been sent to you with the instructions to reset you password",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
                
            }
            
        }
        catch(error){
            if (axios.isAxiosError(error)) {
                toast({
                    description: error?.response?.data?.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
    
                })
            } else {
            console.error(error);
            }
        }
    }


    return (
        <Flex color={colors.brown} bg={colors.black} h={{base:'auto', md:'100vh'}} minH={'100vh'} py={'2.5%'} align={'center'} justify={'center'}>
            <Flex h={'100%'} flex={1} mx={{base:'5%', xl:'10%'}} borderRadius={10} overflow={'hidden'}>
                <Stack flex={1} bg={'rgba(220,220,220, 0.1)'} justify={'center'} align={'center'} py={10} px={5}>
                    <Box display={{base:'block', lg:'none'}} mb={5} as={NavLink} to={'/'}>
                        <Image
                            src="/brain.svg"
                            alt="Humanize"
                            w={{base:20, xl:40}}
                            loading="lazy"
                    
                        />
                    </Box>
                    <Stack mb={5} align={{base:'center', md:'flex-start'}}>
                        <Text fontSize={{base:22, md:32, lg:40}}>Reset Password</Text>
                    I</Stack>
                    <form onSubmit={handleSubmit(handleResetPassword)}>

                            <Text textAlign={'center'} mb={4}>
                                Enter your username to reset your password
                            </Text>

                                <FormControl
                                    id="username"
                                    isInvalid={!!errors.userName}
                                    isRequired
                                >
                                    <FormLabel>Username</FormLabel>
                                    <InputGroup alignItems="center">
                                    <InputLeftElement pointerEvents="none">
                                        <LuAtSign color="gray" />
                                    </InputLeftElement>
                                    <Input
                                        type="text"
                                        placeholder="Enter your username"
                                        {...register("userName", {
                                        required: "Please enter your username",
                                        })}
                                    />
                                    </InputGroup>
                                    <FormErrorMessage>
                                    {errors.userName && errors.userName.message}
                                    </FormErrorMessage>
                                </FormControl>
                            
                            <Button type='submit' isLoading={isSubmitting} w={'100%'} px={10} py={5} mt={5} color={colors.black} bg={colors.darkbrown}>RESET</Button>                               
                            <Text mt={10}>Or  <NavLink to={'/login'} style={{textDecoration:'underline'}}>Login</NavLink></Text>

                    </form>
                    
                </Stack>
                <Stack display={{base:'none', md:'flex'}} w={{lg:'50%', xl:'60%'}} bg={colors.darkbrown} align={'center'} justify={'center'}>
                    <Box as={NavLink} to={'/'} width={{base:'75%', xl:'50%'}}>
                        <Image
                            src='/brain.svg'
                            alt='Justpick'  
                            width={'100%'}                  
                        />
                    </Box>

                </Stack>
            </Flex>
            
        </Flex>
    );
}

export default ForgotPassword;