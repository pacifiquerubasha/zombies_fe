import { Box, Button, Stack, Text, Wrap } from '@chakra-ui/react';
import { colors } from '../../assets/colors';
import { NavLink } from 'react-router-dom';

const News = () => {
    return (
        <Wrap spacing={'2.5%'} spacingY={'36px'}>
            {
                new Array(10).fill(0).map((_, i)=>(
                    <Stack w={{base:"100%", md:"30%", lg:"23%"}} bgImage={"url('/hero.webp')"} bgSize={'cover'} p={5} borderRadius={10} overflow={'hidden'} pos={'relative'} isolation={'isolate'}>
                        <Box
                            zIndex={-1}
                            bgGradient="linear-gradient(180deg, rgba(26,32,44,0.5) 0%, rgba(26,32,44,0.95) 30%)"
                            w={"100%"}
                            h={"100%"}
                            pos={"absolute"}
                            left={0}
                            top={0}
                        />
                        <Text>News</Text>
                        <Text color={colors.red} fontSize={20} fontWeight={700} noOfLines={1}>News {i} Title</Text>
                        <Text noOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.</Text>
                        <Button
                            color={colors.brown}
                            fontSize={16}
                            bg={"transparent"}
                            border={`1px solid ${colors.red}`}
                            borderRadius={0}
                            px={5}
                            _hover={{ bg: colors.black }}
                            as={NavLink} to={`/`} target='_blank'
                        >
                        Explore
                        </Button>
                    </Stack>
                ))
            }
            
        </Wrap>
    );
};

export default News;