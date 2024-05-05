import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { colors } from "../assets/colors";
import { AppContext } from "../AppContext";

const Header = () => {
  const { user, setUser } = useContext(AppContext);

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      pos={isFixed ? "fixed" : "absolute"}
      top={0}
      left={0}
      py={{ base: 0, lg: 5 }}
      px={{ base: "5%", lg: "10%" }}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
      bg={isFixed ? colors.black : "transparent"}
      overflowX={"hidden"}
      zIndex={"sticky"}
      className="header"
    >
      <Flex as={NavLink} to={"/"} align={"center"} className="logo">
        <Image
          src="/brain.svg"
          alt="Humanize"
          w={{ base: 20, md: 24, lg: 36 }}
          cursor={"pointer"}
        />
        <Text
          fontSize={{ base: 20, md: 28, lg: 36 }}
          color={colors.brown}
          fontWeight={900}
        >
          Humanize
        </Text>
      </Flex>

      <Flex
        align={"center"}
        gap={"2.5%"}
        flex={1}
        justify={"flex-end"}
        fontSize={18}
        fontWeight={600}
        display={{ base: "none", lg: "flex" }}
      >
        <Text
          as={NavLink}
          color={colors.brown}
          _hover={{
            color: colors.red,
            borderBottom: `1px solid ${colors.red}`,
          }}
          to={"/courses"}
        >
          Courses
        </Text>
        <Text
          as={NavLink}
          color={colors.brown}
          _hover={{
            color: colors.red,
            borderBottom: `1px solid ${colors.red}`,
          }}
          to={"/additional-resources"}
        >
          Resources
        </Text>
        {user && (
          <Text
            as={NavLink}
            color={colors.brown}
            _hover={{
              color: colors.red,
              borderBottom: `1px solid ${colors.red}`,
            }}
            to={"/personnal-space"}
          >
            Personal Space
          </Text>
        )}
        {user ? (
          <Avatar
            size="md"
            name={user?.userName}
            src="/zombie4.png"
            border={`3px solid ${colors.red}`}
          />
        ) : (
          <Button
            color={colors.brown}
            fontSize={20}
            bg={"transparent"}
            border={`2px solid ${colors.red}`}
            borderRadius={0}
            px={5}
            py={4}
            _hover={{ bg: colors.black }}
            as={NavLink}
            to={"/login"}
          >
            Reanimate
          </Button>
        )}
      </Flex>

      <Box display={{ base: "block", lg: "none" }} fontSize={{ base: 24, md: 32, lg: 36 }}>
        <HiOutlineMenuAlt3          
          color={colors.brown}
          cursor={"pointer"}
          onClick={() => setShowMobileNav(true)}
        />
      </Box>

      <Stack
        pos={"fixed"}
        justify={"center"}
        align={"center"}
        left={0}
        top={0}
        width={"100%"}
        bg={colors.black}
        color={"black"}
        overflow={"hidden"}
        className={`mobile__nav ${showMobileNav ? "mobile__nav--show" : ""}`}
      >
        <Box fontSize={{ base: 24, md: 32, lg: 36 }} position={"absolute"} right={"8%"} top={16}>
          <IoCloseOutline
            onClick={() => setShowMobileNav(false)}
            color={colors.brown}          
            cursor={"pointer"}
          />
        </Box>

        <Stack fontSize={{ base: 24, md: 32 }} spacing={"30px"}>
          <Text
            as={NavLink}
            color={colors.brown}
            _hover={{
              color: colors.red,
              borderBottom: `1px solid ${colors.red}`,
            }}
            to={"/courses"}
          >
            Courses
          </Text>
          <Text
            as={NavLink}
            color={colors.brown}
            _hover={{
              color: colors.red,
              borderBottom: `1px solid ${colors.red}`,
            }}
            to={"/additional-resources"}
          >
            Resources
          </Text>
          {user ? (
            <Text
              as={NavLink}
              color={colors.brown}
              _hover={{
                color: colors.red,
                borderBottom: `1px solid ${colors.red}`,
              }}
              to={"/personnal-space"}
            >
              Personal Space
            </Text>
          )
          : (
            <Button
              color={colors.brown}
              fontSize={{base:18, md:20}}
              bg={"transparent"}
              border={`2px solid ${colors.red}`}
              borderRadius={0}
              px={5}
              py={4}
              _hover={{ bg: colors.black }}
              as={NavLink}
              to={"/login"}
            >
              Reanimate
            </Button>)
        
        }
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Header;
