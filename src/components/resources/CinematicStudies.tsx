import { Box, Flex, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { colors } from "../../assets/colors";

const CinematicStudies = () => {
  return (
    <Wrap spacing={"2.5%"} spacingY={"36px"}>
      {new Array(10).fill(0).map((_, i) => (
        <Stack
          key={i}
          w={{base:"100%", md:"30%", lg:"23%"}}
          p={5}
          overflow={"hidden"}
          pos={"relative"}
          isolation={"isolate"}
        >
            <Box pos={'relative'}>        
                <Image
                src={"/hero.webp"}
                w={"100%"}
                h={200}
                objectFit={"cover"}
                borderTopRadius={10}
                loading="lazy"
                />
                <Text fontSize={12} pos={'absolute'} bottom={2} right={2} bg={colors.black} px={2} py={1} borderRadius={5} color={'rgba(255, 255, 255, 0.5)'}>25:00</Text>
            </Box>
            <Stack>
                <Text pt={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a
                maxi
                </Text>
                <Flex
                as={NavLink}
                to={`/`}
                mt={5}
                justify={"space-between"}
                align={"center"}
                gap={2}
                >
                    <Text color={colors.red} fontSize={14}>
                        Explore
                    </Text>
                    <FaArrowRight fontSize={14} color={colors.red} />
                </Flex>
            </Stack>
          
        </Stack>
      ))}
    </Wrap>
  );
};

export default CinematicStudies;
