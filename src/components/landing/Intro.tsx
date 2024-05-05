import { Box, Flex, Image } from "@chakra-ui/react";
import { colors } from "../../assets/colors";

const Intro = () => {
  return (
    <Flex
      py={{ base: 10, lg: 32 }}
      pb={{base:0, lg:32}}
      px={{ base: "5%", lg: "10%" }}
      align={"center"}
      pos={"relative"}
      bgGradient="linear-gradient(0deg, rgba(26,32,44,0) 0%, rgba(26,32,44,0.9) 50%)"
      flexDir={{base:"column", md:"row"}}
    >
      <Image
        src={"/zombie2.webp"}
        alt={"Zombie"}
        w={{md:"75%", lg:"50%"}}
        h={{base:300, md:500}}
        objectFit={"cover"}
        objectPosition={"center"}
        borderRadius={16}
        marginLeft={{ base: 0, md: "5%", lg: "10%" }}
        loading="lazy"
      />
      <Box
        pos={{md:"absolute"}}
        right={"10%"}
        w={{md:"40%"}}
        h={400}
        borderRadius={{base:10, md:32}}
        overflow={"hidden"}
        border={"4px solid white"}
        bg={colors.black}
        transform={{base:"translateY(-5rem)", md:'unset'}}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XgewzZLnmKQ?si=UwwvE4sQdfhQ4ynL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          loading="lazy"
        />
      </Box>
    </Flex>
  );
};

export default Intro;
