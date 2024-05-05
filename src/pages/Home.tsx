
import React from "react";
import Objectives from "../components/landing/Objectives";
import Hero from "../components/landing/Hero";
import Intro from "../components/landing/Intro";
import SampleCourses from "../components/landing/SampleCourses";
import Layout from "../components/Layout";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";

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
