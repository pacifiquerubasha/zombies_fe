
import React from "react";
import Layout from "../components/Layout";
const Hero = React.lazy(() => import("../components/landing/Hero"));
const Intro = React.lazy(() => import("../components/landing/Intro"));
const Objectives = React.lazy(() => import("../components/landing/Objectives"));
const SampleCourses = React.lazy(() => import("../components/landing/SampleCourses"));
const CTA = React.lazy(() => import("../components/landing/CTA"));
const Testimonials = React.lazy(() => import("../components/landing/Testimonials"));


const Home: React.FC<{}> = () => {
  return (
    <Layout>
      
      <Hero/>
      <Intro/>
      <Objectives />
      <SampleCourses/>
      <CTA/>
      <Testimonials/>

    </Layout>
  );
};

export default Home;
