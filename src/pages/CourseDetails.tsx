import { lazy, useEffect, useState } from 'react';
import Layout from '../components/Layout';

import { useParams } from 'react-router-dom';
import { courses_data } from '../utils/courses_data';

const Hero = lazy(() => import('../components/course-details/Hero'));
const WhatsIncluded = lazy(() => import('../components/course-details/WhatsIncluded'));
const Course = lazy(() => import('../components/course-details/Course'));

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