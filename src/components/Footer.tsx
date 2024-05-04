import { Button, Flex, FormControl, Image, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { colors } from '../assets/colors';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LiaLinkedinIn } from 'react-icons/lia';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
    return (
        <Stack color={"rgba(255, 255, 255, 0.5)"}>
            <Flex px={"10%"} py={24} gap={"2.5%"} justify={'space-between'} bgGradient={'linear-gradient(25deg, rgba(26,32,44,0.2) 11%, rgba(255,255,255,0.2) 69%)'}>
            <Stack w={"40%"} align={"flex-start"}>
                <Flex align={'center'}>
                    <Image
                        src="brain.svg"
                        alt="Humanize"
                        w={84}
                        cursor={'pointer'}
                    />
                    <Text fontSize={32} color={colors.brown} fontWeight={900}>Humanize</Text>
                </Flex>
                <Text fontSize={18} w={"80%"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                ac vehicula ligula
                </Text>
                <Text mt={5} fontSize={28}>
                Subscribe Now
                </Text>
                <FormControl w={"80%"}>
                <InputGroup>
                    <InputLeftAddon
                    border={`1px solid ${colors.darkbrown}`}
                    bg={"transparent"}
                    children={<FaEnvelope />}
                    />
                    <Input
                    type={"email"}
                    placeholder={"Enter your email"}
                    border={`1px solid ${colors.darkbrown}`}
                    _focus={{ border: "none", outline: "none" }}
                    />
                </InputGroup>
                </FormControl>
                <Button
                color={"white"}
                bg={colors.darkbrown}
                borderRadius={0}
                px={12}
                py={6}
                mt={5}
                fontSize={20}
                fontWeight={400}
                >
                Subscribe
                </Button>
            </Stack>
            <Stack gap={7}>
                <Text fontSize={28} fontWeight={700}>
                Quick Links
                </Text>
                <Stack fontSize={16} gap={5}>
                <Text>Courses</Text>
                <Text>Resources</Text>
                <Text>Personal space</Text>
                </Stack>
            </Stack>

            
            <Stack gap={7}>
                <Text fontSize={28} fontWeight={700}>
                Contact Info
                </Text>
                <Flex fontSize={16} gap={5} align={"center"}>
                <FiPhoneCall fontSize={32} />
                <Stack gap={0}>
                    <Text>Phone Number</Text>
                    <Text color={colors.brown}>+1 234 567 890</Text>
                </Stack>
                </Flex>
                <Flex fontSize={16} gap={5} align={"center"}>
                <MdOutlineLocationOn fontSize={32} />
                <Stack gap={0}>
                    <Text>Address</Text>
                    <Text color={colors.brown}>Pamplemousses</Text>
                </Stack>
                </Flex>
                <Flex align={"center"} gap={5}>
                <Flex
                    align={"center"}
                    justify={"center"}
                    bg={colors.darkbrown}
                    color={"white"}
                    w={10}
                    h={10}
                    borderRadius={"100%"}
                >
                    <FaFacebookF />
                </Flex>
                <Flex
                    align={"center"}
                    justify={"center"}
                    bg={colors.darkbrown}
                    color={"white"}
                    w={10}
                    h={10}
                    borderRadius={"100%"}
                >
                    <LiaLinkedinIn />
                </Flex>
                <Flex
                    align={"center"}
                    justify={"center"}
                    bg={colors.darkbrown}
                    color={"white"}
                    w={10}
                    h={10}
                    borderRadius={"100%"}
                >
                    <BsInstagram />
                </Flex>
                <Flex
                    align={"center"}
                    justify={"center"}
                    bg={colors.darkbrown}
                    color={"white"}
                    w={10}
                    h={10}
                    borderRadius={"100%"}
                >
                    <BsTwitterX />
                </Flex>
                </Flex>
            </Stack>
            </Flex>

            <Flex px={"10%"} py={5} align={'center'} justify={'space-between'} fontSize={18} fontWeight={600}>
                <Text>&copy;{new Date().getFullYear()} FinityEdge</Text>
                <Text>All Rights Reserved</Text>
            </Flex>

        </Stack>
    );
};

export default Footer;