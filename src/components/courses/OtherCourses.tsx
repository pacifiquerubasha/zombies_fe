import { Box, Flex, Input, Stack, Text, Wrap } from '@chakra-ui/react';
import { colors } from '../../assets/colors';
import CourseCard from './CourseCard';
import { useState } from 'react';

interface Props{
    data:any
}

const OtherCourses:React.FC<Props> = ({data}) => {

    const [courses, setCourses] = useState(data);
    const handleChange = (e:React.ChangeEvent)=>{
        const value = (e.target as HTMLInputElement).value;
        const filteredCourses = data.filter((course:any)=>(
            course.title.toLowerCase().includes(value.toLowerCase()) ||
            course.author.toLowerCase().includes(value.toLowerCase()) ||
            course.tags[0].toLowerCase().includes(value.toLowerCase())

        ));
        setCourses(filteredCourses);

    }

    return (
        <Stack px={{base:"5%", md:'10%'}} py={{base:10, md:20}} color={colors.brown}>
            <Flex align={'center'} mb={5} flexDir={{base:'column', sm:'row'}}>
                <Text fontSize={{base:32, md:36}} >Other Courses</Text>
                <Input
                    placeholder="Search"
                    size="lg"
                    w={{base:"100%", sm:"50%", md:'30%'}}
                    ml={'auto'}
                    bg={colors.black}
                    color={colors.brown}
                    borderRadius={0}
                    border={`2px solid ${colors.brown}`}
                    _focus={{border: `2px solid ${colors.red}`}}
                    onChange={handleChange}
                    my={{base:5, sm:0}}
                />
            </Flex>
            <Wrap spacingX={'2.5%'} spacingY={'30px'} color={'rgba(255, 255, 255, 0.5)'}  overflow={'hidden'}>
                {
                    courses.map((course:any, i:number)=>(
                        <Box w={{base:"100%", md:"45%", lg:'23%'}} key={i} height={'100%'}>
                            <CourseCard  course={course}/>
                        </Box>
                    ))
                }
            </Wrap>
        </Stack>
    );
};

export default OtherCourses;