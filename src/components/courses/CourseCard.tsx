import { Box, Flex, Image, Stack, Text, } from '@chakra-ui/react';
import { colors } from '../../assets/colors';
import { VscPulse } from 'react-icons/vsc';
import { IoMdStarOutline } from 'react-icons/io';
import { PiUsers } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

interface CourseProps{
    course:any
}

const CourseCard:React.FC<CourseProps> = ({course}) => {

    const navigate = useNavigate();
    const handleClick = ()=>{
        const nameId = course?.title?.split(' ')?.join('-').toLowerCase();
        navigate(`/courses/${nameId}`)
    }


    return (
        <Stack cursor={'pointer'} border={`1px solid ${colors.black}`} onClick={handleClick} bg={colors.black} borderRadius={16}>
            <Box pos={'relative'} w={'100%'}>
                <Image
                    src={course.image || "/zombie2.webp"}
                    alt={course.title}
                    width={"100%"}
                    height={200}
                    objectFit={"cover"}
                    objectPosition={'top'}
                    borderRadius={16}
                />
                <Text data-aos="fade-up" data-aos-easing="ease-in-sine" fontSize={12} pos={'absolute'} bottom={2} left={2} bg={colors.black} color={colors.brown} py={1} px={2} borderRadius={5}>{course.tags[0]}</Text>
            </Box>
            <Stack p={5}>
                <Text fontWeight={700} fontSize={14} textTransform={'uppercase'}>{course.title}</Text>
                <Text fontSize={12} noOfLines={2}>{course.shortDesc}</Text>
                <Flex data-aos="fade-up" data-aos-easing="ease-in-sine" color={colors.darkbrown} align={'center'} gap={2} fontSize={12}>
                    By
                    <Text>{course.author}</Text>
                </Flex>
                <Flex justify={'space-between'} mt={2} data-aos="fade-up" data-aos-easing="ease-in-sine">
                    <Flex gap={1}>
                        <VscPulse/>
                        <Text fontSize={12}>  {course.cpu}</Text>
                    </Flex>
                    <Flex gap={1}>
                        <IoMdStarOutline/>
                        <Text fontSize={12}>  {course.rating}</Text>
                    </Flex>
                    <Flex gap={1}>
                        <PiUsers/>
                        <Text fontSize={12}>  {course.students}</Text>
                    </Flex>
                </Flex>
            </Stack>

        </Stack>
    );
};

export default CourseCard;