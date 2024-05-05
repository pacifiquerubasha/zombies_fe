import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../assets/colors";
import { sampleCourses } from "../../utils/sample_data";
import { NavLink } from "react-router-dom";

const SampleCourses = () => {
  return (
    <Stack
      px={{ base: "5%", lg: "10%" }}
      py={{ base: 10, lg: 32 }}
      color={colors.darkbrown}
      align={"center"}
    >
      <Text
        textAlign={"center"}
        fontSize={{ base: 32, lg: 36 }}
        fontWeight={700}
        color={colors.red}
      >
        Lifeless Lessons for the Unliving
      </Text>
      <Text textAlign={"center"} fontSize={{base:18, md:22}} mb={10}>
        Escape your tomb of ignorance with these zombie-approved crowd
        un-pleasers.
      </Text>
      <Flex
        justify={{ base: "center", lg: "space-between" }}
        width={"100%"}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        gap={{ base: 10, lg: 0 }}
      >
        {sampleCourses.map((program, i) => (
          <Box
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            key={i}
            borderRadius={10}
            overflow={"hidden"}
            width={{ base: "100%", md: "40%", lg: "23%" }}
            height={480}
            pos={"relative"}
          >
            <Image
              src={"/zombie2.webp"}
              alt="Jamii"
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
            />
            <Stack
              pos={"absolute"}
              color={"white"}
              bottom={0}
              px={"5%"}
              pb={5}
              height={"100%"}
              w={'100%'}
              justify={"flex-end"}
              className="transparent__bg"
              bgGradient="linear-gradient(180deg, rgba(26,32,44,0.5) 0%, rgba(26,32,44,0.9) 50%)"
            >
              <Text
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                fontSize={18}
                noOfLines={1}
                textTransform={"uppercase"}
                color={colors.brown}
              >
                {program.title}
              </Text>
              <Text
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                fontSize={16}
                noOfLines={5}
                mb={5}
              >
                {program.short}
              </Text>
              <Button
                bg={colors.green}
                _hover={{ bg: colors.black }}
                color={colors.brown}
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                as={NavLink}
                to={`/programs/${program.title
                  ?.toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        ))}
      </Flex>
      <Button
        color={colors.darkbrown}
        fontSize={{base:16, md:20, lg:26}}
        bg={"transparent"}
        border={`2px solid ${colors.red}`}
        borderRadius={0}
        px={{base:4, md:6, lg:10}}
        py={{base:2, md:4, lg:6}}
        _hover={{ bg: colors.black }}
        mt={{base:4, md:6, lg:10}}
        as={NavLink}
        to={'/courses'}
      >
        Unbundle More Brains
      </Button>
    </Stack>
  );
};

export default SampleCourses;
