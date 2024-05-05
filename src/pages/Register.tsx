import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../assets/colors";
import { NavLink, useNavigate } from "react-router-dom";
import { ImEye, ImEyeBlocked, ImKey } from "react-icons/im";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa6";
import { LuAtSign } from "react-icons/lu";
import { register as signup } from "../services/auth";
import { Select } from "chakra-react-select";

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: any;
}

const Register: React.FC<{}> = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>();

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handlePasswordVisibility = () => setShowPassword((prev) => !prev);
  const handleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const [message] = React.useState({
    status: "success",
    description: "",
    visible: false,
  });

  const handleRegister = async (data: RegisterData) => {
    const { confirmPassword, ...rest } = data;
    const signupData = {
        ...rest, 
        gender: rest.gender.value,
        userName: rest.username
    }

    try {
      const response = await signup(signupData);
      if (response.data) {
        console.log(response.data)
        toast({
          title: "Registration successfull",
          description:
            "You have successfully registered",
          status: "success",
          duration: null,
          isClosable: true,
        });

        navigate('/login')
        
      }
    } catch (e) {
      toast({
        description: "An error occurred, please try again",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      color={colors.brown}
      bg={colors.black}
      h={{ base: "auto", md: "100vh" }}
      minH={"100vh"}
      py={"2.5%"}
      align={"center"}
      justify={"center"}
    >
      <Flex
        h={"100%"}
        flex={1}
        mx={{ base: "5%", xl: "10%" }}
        borderRadius={10}
        overflow={"hidden"}
      >
        <Stack
          flex={1}
          bg={"rgba(220,220,220, 0.1)"}
          justify={"center"}
          align={"center"}
          py={10}
          px={{ base: 5, md: 10 }}
        >
          <Box
            display={{ base: "block", lg: "none" }}
            mb={5}
            as={NavLink}
            to={"/"}
          >
            <Image src="/brain.svg" alt="Humanize" w={{ base: 20, xl: 40 }} loading="lazy"/>
          </Box>
          <Stack mb={{ base: 5, md: 10 }} align={"center"}>
            <Text fontSize={{ base: 22, md: 32, lg: 40 }}>
              Create An Account
            </Text>
            <Text>
              Or{" "}
              <NavLink to={"/login"} style={{ textDecoration: "underline" }}>
                Login
              </NavLink>
            </Text>
          </Stack>
          <form onSubmit={handleSubmit(handleRegister)}>
            {message.visible && (
              <Badge
                colorScheme={message.status === "success" ? "green" : "red"}
                fontSize={14}
                padding={2}
                borderRadius={5}
              >
                {message.description}
              </Badge>
            )}

            <Wrap align={"center"} justify={"space-between"}>
              <FormControl
                w={{ base: "100%", md: "45%" }}
                id="username"
                isInvalid={!!errors.username}
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
                    {...register("username", {
                      required: "Please enter your username",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "45%" }}
                id="email"
                isInvalid={!!errors.email}
                isRequired
              >
                <FormLabel>Email</FormLabel>
                <InputGroup alignItems="center">
                  <InputLeftElement pointerEvents="none">
                    <FaEnvelope color="gray" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Please enter your email",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "45%" }}
                id="gender"
                isInvalid={!!errors.gender}
                isRequired
              >
                <FormLabel>Gender</FormLabel>
                <Select
                  useBasicStyles
                  options={genderOptions}
                  onChange={(value) => setValue("gender", value)}
                  className="select__gender"
                />
                <FormErrorMessage>
                  {!!errors.gender && !!errors.gender.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "45%" }}
                id="password"
                isInvalid={!!errors.password}
                isRequired
              >
                <FormLabel>Password</FormLabel>
                <InputGroup alignItems="center">
                  <InputLeftElement pointerEvents="none">
                    <ImKey color="gray" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="*******"
                    {...register("password", {
                      required: "Please enter your password",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,
                        message:
                          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character",
                      },
                    })}
                  />
                  <InputRightElement width="3rem" height="100%">
                    <Button size="sm" onClick={handlePasswordVisibility}>
                      {showPassword ? <ImEyeBlocked /> : <ImEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "45%" }}
                id="confirmPassword"
                isInvalid={!!errors.confirmPassword}
                isRequired
              >
                <FormLabel>Confirm password</FormLabel>
                <InputGroup alignItems="center">
                  <InputLeftElement pointerEvents="none">
                    <ImKey color="gray" />
                  </InputLeftElement>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="*******"
                    {...register("confirmPassword", {
                      required: "Please enter your password",
                      validate: (value) =>
                        value === getValues().password ||
                        "Passwords do not match",
                    })}
                  />
                  <InputRightElement width="3rem" height="100%">
                    <Button size="sm" onClick={handleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <ImEyeBlocked /> : <ImEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
            </Wrap>
            <Button
              type="submit"
              isLoading={isSubmitting}
              mx={"auto"}
              w={{ base: "100%", md: "45%" }}
              px={10}
              py={5}
              mt={10}
              color={colors.black}
              bg={colors.darkbrown}
            >
              REGISTER
            </Button>
          </form>
        </Stack>
        <Stack
          display={{ base: "none", lg: "flex" }}
          w={"40%"}
          bg={colors.darkbrown}
          align={"center"}
          justify={"center"}
        >
          <Box as={NavLink} to={"/"} width={"50%"}>
            <Image src="/brain.svg" alt="Justpick" width={"100%"} loading="lazy"/>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Register;
