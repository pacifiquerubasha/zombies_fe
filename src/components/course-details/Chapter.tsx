import { Box, Button, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../assets/colors';
import { MdSettings } from 'react-icons/md';

interface Props{
    chapter:any,
    isLast: boolean
}

const Chapter:React.FC<Props> = ({chapter, isLast}) => {
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

            {isLast &&
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
            >
                Generate certificate
            </Button>}
            
        </Stack>
    );
};

export default Chapter;