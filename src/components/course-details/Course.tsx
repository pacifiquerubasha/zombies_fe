import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../../assets/colors";
import Chapter from "./Chapter";

interface Props {
  course: any;
}

const Course: React.FC<Props> = ({ course }) => {
  return (
    <Stack color={colors.brown} py={{base:10, md:16, lg:20}} px={{ base: "5%", lg: "10%" }}>
      <Stack>
        <Text fontSize={{base:32, md:36}}>Course Description</Text>
        <Text>{course?.longDesc}</Text>
      </Stack>

      <Stack mt={10}>
        <Text fontSize={36} mb={5}>
          Chapters
        </Text>
        <Accordion allowToggle>
          {course?.chapters?.map((chapter: any, i: number) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Chapter {i + 1} - {chapter?.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Chapter
                  isLast={i + 1 === course?.chapters?.length}
                  chapter={chapter}
                  course={course}
                />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default Course;
