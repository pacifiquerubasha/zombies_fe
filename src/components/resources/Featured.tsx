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
          loading="lazy"
        />
        <Stack flex={1} px={{base:0, md:"5%"}} mt={{base:10, md:0}} justify={"center"} align={"flex-start"}>
          <Text>FEATURED</Text>
          <Text fontSize={{ base: 18, md: 24, lg: 32 }}>
            Some Featured Title
          </Text>
          <Text fontSize={{base:14, md:16}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur, nisl sit amet aliquet tincidunt, nunc ligula
            consectetur mi, in tincidunt est libero nec nulla. Sed nec ultricies
            ante. Donec auctor, nunc a lacinia tincidunt, orci sapien luctus
            lacus, quis tincidunt nulla sapien sit amet odio. Donec auctor, nunc
            a lacinia tincidunt, orci sapien luctus lacus, quis tincidunt nulla
            sapien sit amet odio.
          </Text>
          <Flex as={NavLink} mt={5} align={"center"} gap={2}>
            <Text>Explore</Text>
            <FaArrowRight />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Featured;
