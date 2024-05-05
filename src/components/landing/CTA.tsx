import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../assets/colors";

const CTA = () => {
  return (
    <Stack
      px={{ base: "5%", lg: "10%" }}
      color={colors.darkbrown}
      align={"center"}
      py={{ base: 10, lg: 32 }}
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
      <a
        href="https://bff.ecoindex.fr/redirect/?url=https://humaanize.netlify.app/"
        target="_blank"
      >
        <img
          src="https://bff.ecoindex.fr/badge/?theme=dark&url=https://humaanize.netlify.app/"
          alt="Ecoindex Badge"
        />
      </a>
      
      <Text data-aos="fade-up" data-aos-easing="ease-in-sine" fontSize={{base:16, md:20}} textTransform={"uppercase"}>
        Zombie Directives
      </Text>
      <Text data-aos="fade-up" data-aos-easing="ease-in-sine" fontSize={{ base: 24, md: 32, lg: 36 }} textAlign={"center"}>
        Eager for the full undead agenda? Unlock your path to perfect human
        immersion.
      </Text>
      <Button
        color={colors.darkbrown}
        fontSize={{base:16, md:20, lg:26}}
        bg={"transparent"}
        border={`2px solid ${colors.red}`}
        borderRadius={0}
        px={{base:4, md:6, lg:10}}
        py={{base:2, md:4, lg:6}}
        _hover={{ bg: colors.black }}
        mt={10}
        data-aos="fade-up" data-aos-easing="ease-in-sine"
      >
        Disinter More Missions
      </Button>
    </Stack>
  );
};

export default CTA;
