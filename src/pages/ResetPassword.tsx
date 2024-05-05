import {Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, useToast } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../assets/colors';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ImEye, ImEyeBlocked, ImKey } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { resetPassword } from '../services/auth';

interface ForgotData {
    password: string,
    confirmPassword: string
}

const ResetPassword: React.FC<{}> = ()=>{

    const {code} = useParams();

    const toast = useToast();
    const navigate = useNavigate();

    const { register, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm<ForgotData>();

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handlePasswordVisibility = () => setShowPassword((prev)=>!prev);
    const handleConfirmPasswordVisibility = () => setShowConfirmPassword((prev)=>!prev);

    const handleResetPassword = async(data:ForgotData) => {
        if(data.password !== data.confirmPassword){
            toast({
                description: "Passwords do not match",
                status: "error",
                duration: 9000,
                isClosable: true,

            })
            return;
        }
        try{
            const response = await resetPassword(data.password, code as string);
            if(response.data){
                toast({
                    description: "Password changed successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })

                navigate('/login');
                
            }
            
        }
        catch(e){
            console.log(e);
            toast({
                description: "Unable to reset password. Please try again",
                status: "error",
                duration: 9000,
                isClosable: true,

            })
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
                    <Stack mb={5} align={{base:'center', md:'flex-start'}}>
                        <Text fontSize={{base:22, md:32, lg:40}}>Reset Password</Text>
                    I</Stack>
                    <Box w={{base:'100%', md:'75%'}}>
                        <form onSubmit={handleSubmit(handleResetPassword)}>
                                
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
                                                pattern: {
                                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
                                                    message: 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character'
                                                }
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

                                <FormControl id="confirmPassword" isInvalid={!!errors.confirmPassword} isRequired>
                                        <FormLabel>Confirm password</FormLabel>
                                        <InputGroup alignItems="center">
                                            <InputLeftElement pointerEvents='none'>
                                                <ImKey color='gray' />
                                            </InputLeftElement>
                                            <Input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder="*******"
                                                {...register('confirmPassword', {
                                                    required: 'Please enter your password',
                                                    validate: value => value === getValues().password || 'Passwords do not match',
                                                })}
                                            />
                                            <InputRightElement width="3rem" height="100%">
                                                <Button size="sm" onClick={handleConfirmPasswordVisibility}>
                                                    {showConfirmPassword ? <ImEyeBlocked/> : <ImEye/>}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {errors.confirmPassword && errors.confirmPassword.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                
                                <Button type='submit' isLoading={isSubmitting} w={'100%'} px={10} py={5} mt={5} color={colors.black} bg={colors.darkbrown}>RESET</Button>                               

                        </form>
                    </Box>
                    
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

export default ResetPassword;