import {
  Box,
  Flex,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Wrap,
  useSteps,
} from "@chakra-ui/react";

import { colors } from "../../assets/colors";
import CourseCard from "./CourseCard";

interface Props {
  data: any;
  coursesRef: any
}

const PopularCourses: React.FC<Props> = ({ data, coursesRef }) => {
  const steps = [
    {
      title: "Discard the Undead Dialect",
      description: "Reanimate Your Verbal Cortex",
    },
    {
      title: "Suppress the Hunger",
      description: "Necrotic Cravings Conversion Therapy",
    },
    {
      title: "Embody the Working Stiff",
      description: "Corporate Zombie Camouflage Mastery",
    },
    {
      title: "Embrace Cultural Consumption",
      description: "Assimilate Human Passions Protocol",
    },
    {
      title: "Join Polite Society",
      description: "Civilized Decorum Coding Reinstalled",
    },
  ];
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <Flex
      bg={"rgba(220,220,220, 0.1)"}
      color={colors.brown}
      py={{base:10, md:16, lg:20}}
      px={{ base: "5%"}}
      flexDir={{base:'column', xl:'row'}}
      ref={coursesRef}
      gap={'2.5%'}
    >
      <Stack flex={1}>
        <Text fontSize={{base:32, md:36}} textAlign={{base:"center", md:"left"}}>Popular Courses</Text>
        <Wrap color={"rgba(255, 255, 255, 0.5)"} overflow={"hidden"} justify={{base:"center", md:'space-between'}}>
          {data.map((course: any, i: number) => (
            <Box w={{base:"100%", md:"45%", lg:"30%"}} key={i} h={"100%"} mx={{base:"auto", md:"unset"}}>
              <CourseCard course={course} />
            </Box>
          ))}
        </Wrap>
      </Stack>

      <Stack mx={{base:"auto", xl:"unset"}} mt={{base:10, xl:0}} w={400} maxW={'100%'} bg={colors.black} p={10} borderRadius={10}>
        <Text fontSize={18} mb={2}>
          Resurrection Checkpoints
        </Text>
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="400px"
          gap="0"
          colorScheme="red"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0" className="stepper__desc">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Flex>
  );
};

export default PopularCourses;
