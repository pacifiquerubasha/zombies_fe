import Layout from '../components/Layout';

import { courses_data } from '../utils/courses_data';
import { lazy, useRef } from 'react';

const Hero = lazy(() => import('../components/courses/Hero'));
const PopularCourses = lazy(() => import('../components/courses/PopularCourses'));
const OtherCourses = lazy(() => import('../components/courses/OtherCourses'));

const Courses = () => {

    const sortedClasses = courses_data.sort((a, b) => b.students - a.students);

    const popularClasses = sortedClasses.slice(0, 3);

    const unpopularClasses = sortedClasses.slice(3);

    const coursesRef = useRef<HTMLDivElement>(null);
    const scrollToRef = ()=>{
        coursesRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <Layout>

            <Hero scrollToRef={scrollToRef}/>
            <PopularCourses data={popularClasses} coursesRef={coursesRef}/>
            <OtherCourses data={unpopularClasses}/>

        </Layout>
    );
};

export default Courses;