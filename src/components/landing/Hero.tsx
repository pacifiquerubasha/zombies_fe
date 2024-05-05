import {
    Box,
    Button,
    Stack,
    Text,
  } from "@chakra-ui/react";
import { colors } from '../../assets/colors';
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <Stack
        pos={"relative"}
        color={"rgba(255, 255, 255, 0.75)"}
        w={"100%"}
        h={"100vh"}
        bgImage={"url('/hero.webp')"}
        overflow={"hidden"}
        bgSize={"cover"}
        backgroundRepeat={"no-repeat"}
        isolation={"isolate"}
      >
        <Box
          zIndex={-1}
          bgGradient="linear-gradient(180deg, rgba(26,32,44,0.5) 0%, rgba(26,32,44,0.9) 50%)"
          w={"100%"}
          h={"100%"}
          pos={"absolute"}
          left={0}
          top={0}
        />
        <Stack gap={7} px={{base:"5%", lg:"10%"}} pb={"5%"} align={"flex-start"} mt={"auto"}>
          <Text data-aos="fade-up" data-aos-easing="ease-in-sine" fontSize={{base:36, md:48, lg:56, "2xl":72}} fontWeight={500}>
            Zombies Gone <Text fontWeight={900}>Humaaan</Text>
          </Text>
          <Text data-aos="fade-up" data-aos-easing="ease-in-sine" w={{base:"100%", md:"75%", lg:"60%"}} fontSize={{base:18, md:20, lg:22, "2xl":24}}>
            Revive Your Existence: The ultimate guide for reanimated creatures
            longing for a human life. Transform from the undead to the living
            with our crash course for a fresh start.
          </Text>
          <Button
            color={"white"}
            fontSize={{base:18, md:24, lg:32}}
            bg={"transparent"}
            border={"2px solid white"}
            borderRadius={0}
            px={{base:5, md:10}}
            py={{base:4, md:6, lg:8}}
            _hover={{ bg: colors.black }}
            as={NavLink}
            to={'/courses'}
            data-aos="fade-up" data-aos-easing="ease-in-sine"
          >
            Rise and Thrive
          </Button>
        </Stack>
      </Stack>
    );
};

export default Hero;