import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import { colors } from "../assets/colors";
import { sampleCourses, testimonials } from "../utils/sample_data";
import { NavLink } from "react-router-dom";
import Objectives from "../components/landing/Objectives";
import Footer from "../components/Footer";

const Home: React.FC<{}> = () => {
  return (
    <Box minH={"100vh"} overflowX={"hidden"} bg={colors.black}>
      <Header />
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
          right={0}
        />
        <Stack gap={7} px={"10%"} pb={"5%"} align={"flex-start"} mt={"auto"}>
          <Text fontSize={72} fontWeight={500}>
            Zombies Gone <Text fontWeight={900}>Humaaan</Text>
          </Text>
          <Text w={"60%"} fontSize={24}>
            Revive Your Existence: The ultimate guide for reanimated creatures
            longing for a human life. Transform from the undead to the living
            with our crash course for a fresh start.
          </Text>
          <Button
            color={"white"}
            fontSize={32}
            bg={"transparent"}
            border={"2px solid white"}
            borderRadius={0}
            px={10}
            py={8}
            _hover={{ bg: colors.black }}
          >
            Rise and Thrive
          </Button>
        </Stack>
      </Stack>

      <Flex
        py={32}
        px={"10%"}
        align={"center"}
        pos={"relative"}
        bgGradient="linear-gradient(0deg, rgba(26,32,44,0) 0%, rgba(26,32,44,0.9) 50%)"
      >
        <Image
          src={"/zombie2.webp"}
          alt={"Zombie"}
          w={"50%"}
          h={500}
          objectFit={"cover"}
          objectPosition={"center"}
          borderRadius={16}
          marginLeft={"10%"}
        />
        <Box
          pos={"absolute"}
          right={"10%"}
          w={"40%"}
          h={400}
          borderRadius={32}
          overflow={"hidden"}
          border={"4px solid white"}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XgewzZLnmKQ?si=UwwvE4sQdfhQ4ynL"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Box>
      </Flex>

      <Objectives />

      <Stack px={"10%"} py={32} color={colors.darkbrown} align={"center"}>
        <Text textAlign={"center"} fontSize={48} fontWeight={700}>
          Lifeless Lessons for the Unliving
        </Text>
        <Text textAlign={"center"} fontSize={22} mb={10}>
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
                  _hover={{bg:colors.black}}
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
          fontSize={26}
          bg={"transparent"}
          border={`2px solid ${colors.red}`}
          borderRadius={0}
          px={10}
          py={6}
          _hover={{ bg: colors.black }}
          mt={10}
        >
          Unbundle More Brains
        </Button>
      </Stack>
      <Stack
        px={"10%"}
        color={colors.darkbrown}
        align={"center"}
        py={32}
        bgImage={"url('/zombie3.webp')"}
        bgSize={"cover"}
        bgPos={"center"}
        pos={"relative"}
        isolation={"isolate"}
      >
        <Box
          w={"100%"}
          h={"100%"}
          bg={"rgba(15, 15, 15, 0.95)"}
          pos={"absolute"}
          zIndex={-1}
          left={0}
          top={0}
        />
        <Text fontSize={20} textTransform={"uppercase"}>
          Zombie Directives
        </Text>
        <Text fontSize={48} textAlign={"center"}>
          Eager for the full undead agenda? Unlock your path to perfect human
          immersion.
        </Text>
        <Button
          color={colors.darkbrown}
          fontSize={26}
          bg={"transparent"}
          border={`2px solid ${colors.red}`}
          borderRadius={0}
          px={10}
          py={6}
          _hover={{ bg: colors.black }}
          mt={10}
        >
          Disinter More Missions
        </Button>
      </Stack>
      <Stack py={32} align={"center"}>
        <Text fontSize={14} color={"rgba(255, 255, 255, 0.5)"} bg={colors.green} px={2} py={1} borderRadius={5}>
          The Undying Truth
        </Text>
        <Text fontSize={36} color={colors.red}>Zombie Metamorphosis Stories</Text>
        <Text fontSize={18} mb={10} color={"rgba(255, 255, 255, 0.5)"}>
          Hear the haunting tales of the formerly undead who conquered humanity.
        </Text>
        <Flex px={"10%"} justify={"space-between"}>
          {testimonials.map((column, index) => (
            <Stack w={"30%"} key={index} spacing={"24px"}>
              {column.map((testimonial, index) => (
                <Stack
                  key={index}
                  p={5}
                  bg={"rgba(220,220,220, 0.1)"}
                  color={"rgba(255, 255, 255, 0.5)"}
                  borderRadius={10}
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <Flex align={"center"} gap={2}>
                    <Avatar
                      src={testimonial.image}
                      size="md"
                      name={testimonial.name}
                      ml={-2}
                    />
                    <Stack gap={0} fontSize={14}>
                      <Text fontWeight={700}>{testimonial.name}</Text>
                      <Text fontSize={12}>{testimonial.handle}</Text>
                    </Stack>
                  </Flex>

                  <Text>{testimonial.testimonial}</Text>
                </Stack>
              ))}
            </Stack>
          ))}
        </Flex>
      </Stack>

      <Footer/>
    </Box>
  );
};

export default Home;
