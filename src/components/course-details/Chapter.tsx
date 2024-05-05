import { Box, Button, List, ListIcon, ListItem, Stack, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { colors } from '../../assets/colors';
import { MdSettings } from 'react-icons/md';
import { AppContext } from '../../AppContext';
import { generateCertificate } from '../../services/others';
import LoginModal from '../LoginModal';

interface Props{
    chapter:any,
    isLast: boolean,
    course: any
}

const Chapter:React.FC<Props> = ({chapter, course}) => {

    const {user} = useContext(AppContext);
    const toast = useToast();

    const handleGenerateCertificate = async()=>{
        try {
            const response = await generateCertificate(user?.userName, course?.title);
            if(response.data){
                console.log(response.data);
                toast({
                    title: "Certificate generated",
                    description: "Your certificate has been generated successfully. You can download it from the link below.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
        } catch (error) {
            console.log(error);            
        }
    }

    const {isOpen, onOpen, onClose} = useDisclosure();
    const clickDownload = ()=>{
        console.log("USER", user)
        if(!user) onOpen();
        else handleGenerateCertificate();
    }

    return (
        <Stack >
            <Text>
                {chapter?.summary}
            </Text>
            <Box
                my={10}
                w={{base:"100%", md:"40%"}}
                h={400}
                borderRadius={24}
                overflow={"hidden"}
                border={"4px solid rgba(255, 255, 255, 0.5)"}
                bg={colors.black}
            >
                <iframe
                    width="100%"
                    height="100%"
                    src={chapter?.videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </Box>
            
            <Text>Tutorial Questions</Text>
            <List spacing={3}>
                {
                    chapter?.questions?.map((question:any, i:number)=>(
                        <ListItem key={i}>
                            <ListIcon as={MdSettings} color='green.500' />
                            {question}
                        </ListItem>
                    ))
                }
                
            </List>

            {false &&
            <>
            <Button
                color={colors.red}
                fontSize={{base:18, md:24, lg:32}}
                bg={"transparent"}
                border={`2px solid ${colors.red}`}
                borderRadius={0}
                px={{base:5, md:10}}
                py={{base:4, md:6, lg:8}}
                _hover={{ bg: colors.black }}
                my={5}
                mr={'auto'}
                onClick={clickDownload}
            >
                Get certificate
            </Button>
            <LoginModal
                isOpen={isOpen}
                onClose={onClose}
                info={"Please login to download your certificate."}
            />
            </>
            }

            
        </Stack>
    );
};

export default Chapter;