import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { colors } from "../../assets/colors";

const Objectives = () => {
  return (
    <Box className="section__boxes" color={colors.brown}>
      <Text
        textAlign={"center"}
        mx={"auto"}
        fontSize={{ base: 32, lg: 36 }}
        mb={{ base: 10, md: 32 }}
        fontWeight={700}
        color={colors.red}
      >
        The Undead Agenda
      </Text>
      <Flex
        align={"center"}
        justify={"center"}
        mx={"auto"}
        className="container mx-auto"
      >
        <Flex>
          <Stack justify={"space-between"} w={"50%"} className="boxes__col">
            <Flex
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              align={"center"}
              gap={"1rem"}
              className=""
            >
              <Image
                src={"/human.png"}
                alt={"Humanity"}
                w={"64px"}
                cursor={"pointer"}
              />
              <Box>
                <Text
                  color={colors.red}
                  fontWeight={900}
                  fontSize={{ base: 18, md: 24, lg: 32 }}
                >
                  Adopt Humanity
                </Text>
                <Text w={"50%"}>
                  Ape living behaviors and social customs to perfection.
                </Text>
              </Box>
            </Flex>
            <Flex
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              align={"center"}
              gap={"1rem"}
              className=""
            >
              <Image
                src={"/culture.png"}
                alt={"Humanity"}
                w={"64px"}
                cursor={"pointer"}
              />
              <Box>
                <Text
                  color={colors.red}
                  fontWeight={900}
                  fontSize={{ base: 18, md: 24, lg: 32 }}
                >
                  Understand Culture
                </Text>
                <Text w={"50%"}>
                  Decipher confounding human arts, traditions, and
                  entertainments.
                </Text>
              </Box>
            </Flex>
          </Stack>

          <Flex
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            justify={"center"}
            align={"center"}
            className="boxes__center"
          >
            <Stack align={"center"} gap={"1rem"}>
              <Box className="square">
                <Text
                  as={"span"}
                  opacity={0.5}
                  fontWeight={900}
                  fontSize={{ base: 24, md: 32, lg: 36 }}
                >
                  01
                </Text>
              </Box>
              <Flex align={"center"} gap={"1rem"} className="sq__middle">
                <Box className="square sq__left">
                  <Text
                    as={"span"}
                    opacity={0.5}
                    fontWeight={900}
                    fontSize={{ base: 24, md: 32, lg: 36 }}
                  >
                    02
                  </Text>
                </Box>
                <Flex
                  color={colors.black}
                  fontWeight={900}
                  justify={"center"}
                  textAlign={"center"}
                  align={"center"}
                  className="square sq__center text-xl"
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-duraton="9000"
                >
                  HUMAN <br />
                  SOCIETIES
                </Flex>
                <Box className="square sq__right">
                  <Text
                    as={"span"}
                    opacity={0.5}
                    fontWeight={900}
                    fontSize={{ base: 24, md: 32, lg: 36 }}
                  >
                    03
                  </Text>
                </Box>
              </Flex>
              <Box className="square sq__bottom">
                <Text
                  as={"span"}
                  opacity={0.5}
                  fontWeight={900}
                  fontSize={{ base: 24, md: 32, lg: 36 }}
                >
                  04
                </Text>
              </Box>
            </Stack>
          </Flex>

          <Stack justify={"space-between"} w={"50%"} className="boxes__col">
            <Flex
              flexDir={"row-reverse"}
              justify={"flex-end"}
              align={"center"}
              gap={"1rem"}
              textAlign={"right"}
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={"/law.png"}
                alt={"Humanity"}
                w={"64px"}
                cursor={"pointer"}
              />
              <Stack align={"flex-end"}>
                <Text
                  color={colors.red}
                  fontWeight={900}
                  fontSize={{ base: 18, md: 24, lg: 32 }}
                >
                  Know Laws
                </Text>
                <Text w={"50%"}>
                  Comprehend perplexing rules governing the respiratory
                  community.
                </Text>
              </Stack>
            </Flex>
            <Flex
              flexDir={"row-reverse"}
              justify={"flex-end"}
              align={"center"}
              gap={"1rem"}
              textAlign={"right"}
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={"/job.png"}
                alt={"Humanity"}
                w={"64px"}
                cursor={"pointer"}
              />
              <Stack align={"flex-end"}>
                <Text
                  color={colors.red}
                  fontWeight={900}
                  fontSize={{ base: 18, md: 24, lg: 32 }}
                >
                  Gain Employment
                </Text>
                <Text w={"50%"}>
                  Develop much-needed professional skills for workplace success.
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Objectives;
