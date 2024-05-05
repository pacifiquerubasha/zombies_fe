import { Image, Stack, Text, Wrap } from '@chakra-ui/react';
import { colors } from '../../assets/colors';
import { NavLink } from 'react-router-dom';

const BookShelf = () => {
    const authors = [
        "Dr. Brainsford A. Romero",
        "Zedrick Z. Zombington",
        "Livia Livingson",
        "Zara Z. Zombrain",
        "Brainella Bookworm",
        "Mortimer Peacebone",
        "Zora Z. Zombowitz",
        "Professor Zedward Z. Zombenstein",
        "Zebulon Z. Zombowski",
        "Zena Z. Zombot"
    ];
    
    const titles = [
        "The Zombie's Guide to Human Behavior",
        "Brains and Brawn: Survival Guide",
        "Zombie Etiquette: Navigating Society",
        "From Z to A: Understanding Human Culture",
        "Undead and Well-Read: Literature Guide",
        "Zombie Diplomacy: Building Bridges",
        "The Art of Zombification: Integration Guide",
        "Brains Over Brawn: Intellectual Pursuits",
        "Zombie Ethics: A Moral Compass",
        "Zombie Tales: Stories of Integration"
    ];

    return (
        <Wrap spacingX={'2%'} spacingY={'36px'}>
            {
                titles.map((title, i)=>(
                    <Stack as={NavLink} to={`https://www.goodreads.com/list/show/8997.Best_Zombie_Books`} target='_blank' key={i} w={40} maxW={'100%'} gap={0}>
                        <Image
                            src={"/hero.webp"}
                            w={'100%'}
                            h={200}
                            objectFit={"cover"}
                            borderTopRadius={10}
                            mb={2}
                            loading="lazy"
                        />
                        <Text fontSize={14} color={colors.red} noOfLines={1}>{authors[i]}</Text>
                        <Text fontSize={12} noOfLines={1}>{title}</Text>
                    </Stack>
                ))
            }
            
        </Wrap>
    );
};

export default BookShelf;