import { Image, Stack, Text, Wrap } from '@chakra-ui/react';
import { colors } from '../../assets/colors';
import { NavLink } from 'react-router-dom';

const BookShelf = () => {


    return (
        <Wrap spacingX={'2%'} spacingY={'36px'}>
            {
                new Array(10).fill(0).map((_, i)=>(
                    <Stack as={NavLink} to={`/`} target='_blank' key={i} w={40} maxW={'100%'} gap={0}>
                        <Image
                            src={"/hero.webp"}
                            w={'100%'}
                            h={200}
                            objectFit={"cover"}
                            borderTopRadius={10}
                            mb={2}
                        />
                        <Text fontSize={14} color={colors.red}>Book Title</Text>
                        <Text fontSize={12}>Author</Text>
                    </Stack>
                ))
            }
            
        </Wrap>
    );
};

export default BookShelf;