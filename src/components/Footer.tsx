import {
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { colors } from "../assets/colors";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Stack color={"rgba(255, 255, 255, 0.5)"}>
      <Flex
        px={{ base: "5%", lg: "10%" }}
        py={{base:10, md:16, lg:24}}
        gap={{base:12, md:"2.5%"}}
        justify={{base:"center", md:"space-between"}}
        align={{base:"center", md:"flex-start"}}
        bgGradient={
          "linear-gradient(25deg, rgba(26,32,44,0.2) 11%, rgba(255,255,255,0.2) 69%)"
        }
        flexDir={{base:"column", md:"row"}}
        flexWrap={'wrap'}
      >
        <Stack w={{base:360, md:"40%"}} maxW={'100%'} align={"flex-start"}>
          <Flex align={"center"}>
            <Image src="/brain.svg" alt="Humanize" w={84} cursor={"pointer"} loading="lazy"/>
            <Text
              fontSize={{ base: 18, md: 24, lg: 32 }}
              color={colors.brown}
              fontWeight={900}
              
            >
              Humanize
            </Text>
          </Flex>
          <Text fontSize={18} w={"80%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            vehicula ligula
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
            _hover={{ bg: colors.darkbrown }}
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

        <Stack w={{base:300, md:"auto"}} maxW={'100%'} gap={7}>
          <Text fontSize={{base:20, md:24, lg:28}} fontWeight={700}>
            Quick Links
          </Text>
          <Stack fontSize={16} gap={5}>
            <Text as={NavLink} to={"/courses"}>
              Courses
            </Text>
            <Text as={NavLink} to={"/additional-resources"}>
              Resources
            </Text>
            <Text as={NavLink} to={"/personnal-space"}>
              Personal space
            </Text>
          </Stack>
        </Stack>

        <Stack w={{base:300, md:"auto"}} maxW={'100%'} gap={7}>
          <Text fontSize={{base:20, md:24, lg:28}} fontWeight={700}>
            Contact Info
          </Text>
          <Flex fontSize={16} gap={5} align={"center"}>
            <FiPhoneCall fontSize={32} />
            <Stack gap={0}>
              <Text>Phone Number</Text>
              <Text as={NavLink} to={`tel:+1 234 567 890`} color={colors.brown}>
                +1 234 567 890
              </Text>
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
              as={NavLink}
              to={`https://facebook.com`}
              target="_blank"
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
              as={NavLink}
              to={`https://linkedin.com`}
              target="_blank"
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
              as={NavLink}
              to={`https://instagram.com`}
              target="_blank"
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
              as={NavLink}
              to={`https://x.com`}
              target="_blank"
            >
              <BsTwitterX />
            </Flex>
          </Flex>
        </Stack>
      </Flex>

      <Flex
        px={{ base: "5%", lg: "10%" }}
        py={5}
        align={"center"}
        justify={"space-between"}
        fontSize={{base:14, md:16, lg:18}}
        fontWeight={{base:400, lg:600}}
      >
        <Text>&copy;{new Date().getFullYear()} Humanize</Text>
        <Text>All Rights Reserved</Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
