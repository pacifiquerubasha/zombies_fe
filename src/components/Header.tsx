import { Avatar, Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { colors } from '../assets/colors';
import { AppContext } from '../AppContext';

const Header = () => {

    const {user} = useContext(AppContext);

    const [showMobileNav, setShowMobileNav] = useState(false); 
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsFixed(window.scrollY > window.innerHeight)
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Flex
        pos={isFixed ? 'fixed':'absolute'} 
        top={0}
        left={0}
        py={5}
        px={"10%"}
        align={"center"}
        justify={"space-between"}
        w={"100%"}
        bg={isFixed ? colors.black:'transparent'}
        overflowX={"hidden"}
        zIndex={"sticky"}
      >
        {/* <Image src="logo.svg" alt="FinityEdge Logo" w={200} cursor={'pointer'}/> */}
        <Flex as={NavLink} to={'/'} align={'center'}>
            <Image
                src="brain.svg"
                alt="Humanize"
                w={100}
                cursor={'pointer'}
            />
            <Text fontSize={36} color={colors.brown} fontWeight={900}>Humanize</Text>
        </Flex>

        <Flex align={'center'} gap={'2.5%'} flex={1} justify={'flex-end'} fontSize={18} fontWeight={600}>
            <Text as={NavLink} color={colors.brown} _hover={{color:colors.red, borderBottom:`1px solid ${colors.red}`}} to={'/programs'}>Courses</Text>
            <Text as={NavLink} color={colors.brown} _hover={{color:colors.red, borderBottom:`1px solid ${colors.red}`}} to={'/programs'}>Resources</Text>
            <Text as={NavLink} color={colors.brown} _hover={{color:colors.red, borderBottom:`1px solid ${colors.red}`}} to={'/gallery'}>Personal Space</Text>
            {
                user? 
                <Avatar
                    size="md"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    border={`3px solid ${colors.red}`}
                />
                :
                <Button
                    color={colors.brown}
                    fontSize={20}
                    bg={"transparent"}
                    border={`2px solid ${colors.red}`}
                    borderRadius={0}
                    px={5}
                    py={4}
                    _hover={{ bg: colors.black }}
                >
                Reanimate
                </Button>

            }
        </Flex>


        <Box display={{base:'block', md:'none'}}>
            <HiOutlineMenuAlt3 fontSize={48} color={colors.brown} cursor={'pointer'} onClick={()=>setShowMobileNav(true)}/>
        </Box>

        <Stack pos={'fixed'} justify={'center'} align={'center'} left={0} top={0} width={'100%'} bg={colors.black} color={'black'} overflow={'hidden'} className={`mobile__nav ${showMobileNav ? "mobile__nav--show":''}`}>
                <IoCloseOutline onClick={()=>setShowMobileNav(false)} color={colors.brown} fontSize={48} cursor={'pointer'} style={{position:'absolute', right:'10%', top:16}} />

                <Stack fontSize={{base:24, md:32}} spacing={'30px'}>
                    <Text as={NavLink} color={colors.brown} _hover={{color:colors.red, borderBottom:`1px solid ${colors.red}`}} to={'/programs'}>Courses</Text>
                    <Text as={NavLink} color={colors.brown} _hover={{color:colors.red, borderBottom:`1px solid ${colors.red}`}} to={'/programs'}>Resources</Text>
                    <Text as={NavLink} color={colors.brown} _hover={{color:colors.red, borderBottom:`1px solid ${colors.red}`}} to={'/gallery'}>Personal Space</Text>

                </Stack>
            </Stack>
      </Flex>
    );
};

export default Header;