import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../assets/colors";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Featured = () => {
  return (
    <Box px={"10%"} color={colors.brown}>
      <Flex align={'center'} flexDir={{base:"column", md:'row'}}>
        <Image
          src={"/zombie2.webp"}
          alt={"Zombie"}
          width={{base:"100%", md:"50%"}}
          height={360}
          objectFit={"cover"}
        />
        <Stack flex={1} px={{base:0, md:"5%"}} mt={{base:10, md:0}} justify={"center"} align={"flex-start"}>
          <Text>FEATURED</Text>
          <Text fontSize={{ base: 18, md: 24, lg: 32 }}>
          Navigating Human Social Norms
          </Text>
          <Text fontSize={{base:14, md:16}}>
          Embark on a journey to understand and integrate into human society. These courses cover essential
           topics such as human behavior, communication skills, and cultural insights. Enhance your zombie-human
            interactions and thrive in a new era of coexistence.
          </Text>
          <Flex as={NavLink} to={'https://dl.acm.org/doi/abs/10.1145/2851581.2892470'} target="_blank" mt={5} align={"center"} gap={2}>
            <Text>Explore</Text>
            <FaArrowRight />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Featured;
