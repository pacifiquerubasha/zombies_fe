import React, { useContext } from 'react';
import { Badge,  Button,  FormControl, FormErrorMessage, FormLabel,  Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useToast } from '@chakra-ui/react';
import { AppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';
import { login } from '../services/auth';
import { ImEye, ImEyeBlocked, ImKey, ImUser } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { colors } from '../assets/colors';

interface Props{
    isOpen:boolean;
    onClose:()=>void;
    info:string
}

interface LoginData {
    userName: string;
    password: string;
}

const LoginModal:React.FC<Props> = ({isOpen, onClose, info}) => {
    const {setUser} = useContext(AppContext);

    const toast = useToast();

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
                const data = response.data?.data;
                setUser(data);
                localStorage.setItem('jpick__token', data.token);
                localStorage.setItem('jpick__user', JSON.stringify(data));

                toast({
                    description: "You have successfully logged in",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                })
                onClose();
            }
            
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={'xl'} >
            <ModalOverlay 
                bg='blackAlpha.300'
            />
            <ModalContent mx={'2.5%'} overflow={'hidden'} borderRadius={16}>
                <ModalHeader fontSize={{base:18, md:20, lg:22}} fontWeight={500} textTransform={'uppercase'}>Connect to your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody maxH={{base:'80vh', md:'60vh'}} overflowY={'auto'}>
                    <Text>{info}</Text>
                    <Stack>
                        <form onSubmit={handleSubmit(handleLogin)}>
                                {message.visible && (
                                    <Badge colorScheme={message.status === 'success' ? 'green' : 'red'} fontSize={14} padding={2} borderRadius={5}>
                                        {message.description}
                                    </Badge>
                                )}

                                <FormControl id="userName" mt={6} isInvalid={!!errors.userName} isRequired>
                                    <FormLabel>Username</FormLabel>
                                    <InputGroup alignItems="center">
                                        <InputLeftElement pointerEvents='none'>
                                            <ImUser color='gray'/>
                                        </InputLeftElement>
                                        <Input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            {...register('userName', {
                                                required: 'Please enter your email',
                                                })}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors.userName && errors.userName.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl id="password" mt={6} isInvalid={!!errors.password} isRequired>
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
                                <Button type='submit' isLoading={isSubmitting} w={'100%'} px={10} py={5} mt={10} color={colors.black} bg={colors.darkbrown}>LOGIN</Button>                               

                        </form>
                        <Text my={5} textAlign={'center'}>Or  <NavLink to={'/register'} style={{textDecoration:'underline'}}>Create An Account</NavLink></Text>

                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default LoginModal;