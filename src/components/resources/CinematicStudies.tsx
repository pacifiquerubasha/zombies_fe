import { Box, Flex, Image, Stack, Text, Wrap } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { colors } from "../../assets/colors";

const CinematicStudies = () => {

  const films = [
    {
      title: 'Understanding Human Emotions Through Film',
      duration: '50:40',
      link: 'https://www.youtube.com/watch?v=xNY0AAUtH3g'
    },
    {
      title: 'The Power of Storytelling in Human Culture',
      duration: '40:00',
      link: 'https://www.youtube.com/watch?v=zEs1af0VpP8'
    },
    {
      title: 'Cinematic Techniques for Effective Communication',
      duration: '30:00',
      link: 'https://www.youtube.com/watch?v=zQU7y2CogH4'
    },
    {
      title: 'Exploring Human Behavior Through Film',
      duration: '25:00',
      link: 'https://www.youtube.com/watch?v=1oBE2Wr7kpk'
    },
    {
      title: 'The Art of Visual Storytelling',
      duration: '20:00',
      link: 'https://www.youtube.com/watch?v=vg-hxpMfKOw'
    },
    {
      title: 'The Role of Sound in Human Perception',
      duration: '15:00',
      link: 'https://www.youtube.com/watch?v=WTyOGPcRY0I'
    },
    {
      title: 'The Psychology of Film',
      duration: '10:00',
      link: 'https://www.youtube.com/watch?v=JiUs2dY0MhM'
    },
    {
      title: 'Cultural Sensitivity in Film',
      duration: '5:00',
      link: 'https://www.youtube.com/watch?v=2xJ_hbD4TQA'
    },
    {
      title: 'Zombies on Screen: Representation and Stereotypes',
      duration: '2:00',
      link: 'https://www.youtube.com/watch?v=G8lWo_cU9U4'
    },
  ];
  

  return (
    <Wrap spacing={"2.5%"} spacingY={"36px"}>
      {films.map((film, i) => (
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
                src={"/zombie6.webp"}
                w={"100%"}
                h={200}
                objectFit={"cover"}
                borderTopRadius={10}
                loading="lazy"
                />
                <Text fontSize={12} pos={'absolute'} bottom={2} right={2} bg={colors.black} px={2} py={1} borderRadius={5} color={'rgba(255, 255, 255, 0.5)'}>{film.duration}</Text>
            </Box>
            <Stack>
                <Text pt={5}>
                {film.title}
                </Text>
                <Flex
                as={NavLink}
                to={film.link}
                target="_blank"
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
