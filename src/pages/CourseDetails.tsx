import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Flex } from '@chakra-ui/react';
import Hero from '../components/course-details/Hero';
import WhatsIncluded from '../components/course-details/WhatsIncluded';
import Course from '../components/course-details/Course';
import { useParams } from 'react-router-dom';
import { courses_data } from '../utils/courses_data';

const CourseDetails = () => {
    const {id} = useParams();
    
    const [course, setCourse] = useState<any>();

    useEffect(()=>{
        if(id){
            const datum = courses_data.find((course)=>course?.title?.split(' ')?.join('-').toLowerCase() === id);
            setCourse(datum);
        }

    }, [id])

    return (
        <Layout>
            <Hero course={course}/>      
            <WhatsIncluded course={course}/>  
            <Course course={course}/>    
        </Layout>
    );
};

export default CourseDetails;