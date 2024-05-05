import { Badge, Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { colors } from '../assets/colors';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImEye, ImEyeBlocked, ImKey, ImUser } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth';
import { AppContext } from '../AppContext';
import axios from 'axios';
import { LuAtSign } from 'react-icons/lu';

interface LoginData {
    userName: string;
    password: string;
}

const Login: React.FC<{}> = ()=>{

    const {setUser} = useContext(AppContext);

    const toast = useToast();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginData>();

    const [showPassword, setShowPassword] = React.useState(false);
    const handlePasswordVisibility = () => setShowPassword((prev)=>!prev);
    
    const [message] = React.useState({
        status: 'success',
        description: '',
        visible:false    
    })


    const handleLogin = async(data:LoginData) => {

        try{
            const response = await login(data);
            if(response.data){
                const data = response.data;
                localStorage.setItem('zombie__token', data.token);
                localStorage.setItem('zombie__user', data.id);
                console.log(response.data)
                toast({
                    description: "You have successfully logged in",
                    status: "success",
                    duration: 2000,
                    isClosable: true,

                })
                navigate('/');

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
            } 
            else {
                toast({
                    description: "Invalid username or password",
                    status: "error",
                    duration: 2000,
                    isClosable: true,

                })
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
                            
                        />
                    </Box>
                    <Stack mb={{base:5, md:10}} align={'center'}>
                        <Text fontSize={{base:22, md:32, lg:40}}>Login</Text>
                    I</Stack>
                    <Box w={{base:'100%', md:'75%'}}>
                        <form onSubmit={handleSubmit(handleLogin)}>
                                {message.visible && (
                                    <Badge colorScheme={message.status === 'success' ? 'green' : 'red'} fontSize={14} padding={2} borderRadius={5}>
                                        {message.description}
                                    </Badge>
                                )}

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

                                <FormControl id="password" my={6} isInvalid={!!errors.password} isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup alignItems="center">
                                        <InputLeftElement pointerEvents='none'>
                                            <ImKey color='gray' />
                                        </InputLeftElement>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="*******"
                                            {...register('password', {
                                                required: 'Please enter your password',
                                            })}
                                        />
                                        <InputRightElement width="3rem" height="100%">
                                            <Button size="sm" onClick={handlePasswordVisibility}>
                                                {showPassword ? <ImEyeBlocked/> : <ImEye/>}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors.password && errors.password.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <Text as={NavLink} to={'/forgot-password'} fontSize={14}>Forgot Password?</Text>
                                <Button type='submit' isLoading={isSubmitting} w={'100%'} px={10} py={5} mt={5} color={colors.black} bg={colors.darkbrown}>LOGIN</Button>                               

                        </form>
                    </Box>
                    
                    <Text mt={5}>Or  <NavLink to={'/register'} style={{textDecoration:'underline'}}>Create An Account</NavLink></Text>
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

export default Login;