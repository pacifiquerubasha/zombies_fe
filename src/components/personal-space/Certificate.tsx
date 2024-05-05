import { FaAward } from 'react-icons/fa';
import { Box, Button, Heading, Text, Flex } from '@chakra-ui/react';

const CertificateList = () => {
  const completedCourses = [
    {
      title: 'Course Title 1',
      instructor: 'Instructor Name 1',
      rating: 4,
    },
    {
      title: 'Course Title 2',
      instructor: 'Instructor Name 2',
      rating: 5,
    },
    {
      title: 'Course Title 3',
      instructor: 'Instructor Name 3',
      rating: 3,
    },
  ];

  return (
    <Box id="certificates" mx="auto" py={8}>
      <Text fontWeight="bold" fontSize={30} mb={5}>My Certificates</Text>
      <Flex flexWrap="wrap" justifyContent={'flex-start'} gridGap={4}>
        {completedCourses.map((course, index) => (
          <Box key={index} bg="gray.800" rounded="lg" p={6} alignItems="center" display="flex">
            <FaAward className="text-indigo-400 text-4xl mr-4" />
            <Box>
              <Heading as="h2" fontSize={['xl', '2xl']} fontWeight="bold" mb={2}>{course.title}</Heading>
              <Text color="gray.300" mb={2}>Instructor: {course.instructor}</Text>
              <Text color="gray.300" mb={2}>Rating: {course.rating}/5</Text>
              <Button bg="indigo.500" _hover={{ bg: 'indigo.600' }} color="white" fontWeight="bold" py={2} px={4} borderRadius={'md'}>
                View Certificate
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CertificateList;
