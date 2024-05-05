import Layout from '../components/Layout';
import Hero from '../components/courses/Hero';
import PopularCourses from '../components/courses/PopularCourses';
import OtherCourses from '../components/courses/OtherCourses';
import { courses_data } from '../utils/courses_data';
import { useRef } from 'react';

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