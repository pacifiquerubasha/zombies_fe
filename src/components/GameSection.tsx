import { FaCheckCircle } from 'react-icons/fa';
import { Box, Button, Flex, Heading, Image, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { colors } from '../assets/colors';
import { NavLink } from 'react-router-dom';

const GameSection = () => {
    const games = [
        { id: 1, name: 'Game 1', description: 'Thrilling adventure awaits!', image: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Game 2', description: 'Unleash your strategic genius!', image: 'https://th.bing.com/th/id/OIP.D6WHQ7xgt88KQVB-DA_KPAHaE8?w=768&h=512&rs=1&pid=ImgDetMain' },
        { id: 3, name: 'Game 3', description: 'Experience endless fun and challenges!', image: 'https://cdn.pixabay.com/photo/2023/09/02/14/06/zombie-8228952_1280.png' },
    ];

    const advantages = [
        'Improves problem-solving skills',
        'Enhances creativity',
        'Boosts cognitive abilities',
        'Promotes social interaction',
        'Reduces stress and anxiety',
    ];

    const backgroundImageUrl = 'https://i.pinimg.com/originals/50/35/0b/50350b816f1c95e02c30e08ce222a014.jpg'; // Replace with your online image URL
    const blurRadius = '5px'; 

    const shuffledGames = games;

   
    return (
        <Stack position="relative" rounded="lg" shadow="md" overflow="hidden" isolation={'isolate'}>
            <Box position="absolute" inset="0" w={'100%'} h={'100%'} border={'1px solid red'} bgImage={`url(${backgroundImageUrl})`} bgSize="cover" bgPosition="center" filter={`blur(${blurRadius})`} zIndex="-1"></Box>
            <Box position="absolute" inset="0" bg="black" opacity="0.5"></Box>
            <Box position="relative" display="flex" flexDirection="column" justifyContent="center" alignItems="center" color="white" p="8">
                <Heading as="h2" textAlign={{base:'center', md:'center'}} fontSize={{base:32, md:36}} fontWeight="bold" color={colors.brown} mb={2}>Dive into Epic Adventures!</Heading>
                <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
                    {shuffledGames.map(game => (
                        <Box data-aos="fade-up" data-aos-easing="ease-in-sine" key={game.id} w={48} className="game-card bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75 transition-opacity duration-300" m="2">
                            <Image src={game.image} alt={game.name} h={40} w={'100%'} objectFit={'cover'} />
                            <Box p="4">
                                <Heading as="h3" fontSize={22} textAlign={{base:'center', md:'left'}} fontWeight="semibold" mb="2">{game.name}</Heading>
                                <Text fontSize={16} textAlign={{base:'center', md:'left'}} className="text-gray-700">{game.description}</Text>
                            </Box>
                        </Box>
                    ))}
                </Flex>
                <Button
                    bg={colors.red}
                    _hover={{ bg: colors.red }}
                    color={colors.black}
                    fontWeight="bold"
                    py="4"
                    px="8"
                    rounded="full"
                    
                    fontSize="xl"
                    as={NavLink}
                    to={'https://game-teamakatsuki-maurice-webcup.netlify.app/'}
                    target='_blank'
                    _focus={{ outline: 'none' }}
                    data-aos="fade-up" data-aos-easing="ease-in-sine"
                >
                    PLAY NOW
                </Button>
            </Box>

            <Box bg="black"  p="8" display="flex" flexDirection="column" >
                <Heading as="h3" fontSize={{base:30, md:36}} fontWeight="bold" color="white" mb="4">Advantages of Playing Games for Zombies</Heading>
                <List color="white">
                    {advantages.map((advantage, index) => (
                        <ListItem data-aos="fade-up" data-aos-easing="ease-in-sine" key={index} mb="2" display="flex" alignItems="center">
                            <FaCheckCircle className="text-green-500" />
                            <Text ml={2}>{advantage}</Text>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Stack>
    );
};

export default GameSection;