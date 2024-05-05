import { Button, Flex, Image, Stack, Text,  } from '@chakra-ui/react';
import { colors } from '../../assets/colors';

interface Props{
    scrollToRef: ()=>void
}

const Hero:React.FC<Props> = ({scrollToRef}) => {
    return (
        <Flex flexDir={{base:"column-reverse", md:"row"}} color={colors.brown} pt={{base:"20vh", md:'25vh'}} pb={48} px={'10%'} justify={'space-between'} align={'center'}>
            <Stack flex={1} align={{base:"center", md:'flex-start'}} textAlign={{base:"center", md:"left"}}>
                <Text fontSize={36}>The Reanimation Academy</Text>
                <Text fontSize={{base:18, md:20}} w={{base:"100%", md:"75%", '2xl':'60%'}}>
                    Putrid on the outside? We'll fix what's rotting on the inside. Our immersive training modules will reprogram your zombie CPU for flawless human camouflage.
                </Text>
                <Button
                    color={colors.red}
                    fontSize={{base:20, md:24}}
                    bg={"transparent"}
                    border={`2px solid ${colors.red}`}
                    borderRadius={0}
                    py={4}
                    px={{base:5, md:10}}
                    _hover={{ bg: colors.black }}
                    mt={3}
                    onClick={scrollToRef}
                >
                    Rise and Thrive
                </Button>
            </Stack>
            <Image
                src="brain.gif"
                alt="Humanize"
                w={{base:240, md:'30%'}}
                maxW={'100%'}
                cursor={'pointer'}
            />

        </Flex>
    );
};

export default Hero;