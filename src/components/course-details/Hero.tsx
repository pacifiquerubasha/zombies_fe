import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../assets/colors";
import { VscPulse } from "react-icons/vsc";
import { IoMdStarOutline } from "react-icons/io";
import { PiUsers } from "react-icons/pi";
import { BiChevronRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

interface Props {
  course: any;
}

const Hero: React.FC<Props> = ({ course }) => {
  return (
    <Flex
      color={colors.brown}
      pt={{base:"20vh", md:'25vh'}}
      pb={{base:24, md:32, lg:48}}
      px={{ base: "5%", lg: "10%" }}
      justify={"space-between"}
      align={"center"}
      flexDir={{base:'column', md:'row'}}
    >
      <Stack flex={1} align={"flex-start"}>
        <Breadcrumb
          spacing="8px"
          separator={<BiChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              as={NavLink}
              to={"/courses"}
              _hover={{ borderBottom: `1px solid ${colors.brown}` }}
            >
              Courses
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink noOfLines={1}>{course?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Text fontSize={{base:32, md:40}} color={colors.red} mt={{base:5, md:0}}>
          {course?.title}
        </Text>
        <Text fontSize={14} opacity={0.75}>
          BY {course?.author}.
        </Text>
        <Text fontSize={18} w={{base:"100%", md:"60%"}}>
          {course?.shortDesc}
        </Text>
        <Flex gap={3} mt={3} mb={5}>
          {course?.tags?.map((tag: string, i: number) => (
            <Text
              key={i}
              px={2}
              py={1}
              border={`1px solid rgba(255, 255, 255, 0.5)`}
            >
              {tag}
            </Text>
          ))}
        </Flex>
        <Flex mt={2} gap={"5%"} w={"100%"}>
          <Flex gap={1} align={"center"}>
            <VscPulse fontSize={26} />
            <Text fontSize={18}> {course?.cpu}</Text>
          </Flex>
          <Flex gap={1} align={"center"}>
            <IoMdStarOutline fontSize={26} />
            <Text fontSize={18}> {course?.rating}</Text>
          </Flex>
          <Flex gap={1} align={"center"}>
            <PiUsers fontSize={26} />
            <Text fontSize={18}> {course?.students}</Text>
          </Flex>
        </Flex>
        {false && <Button
          color={colors.red}
          fontSize={{base:18, md:24, lg:32}}
          bg={"transparent"}
          border={`2px solid ${colors.red}`}
          borderRadius={0}
          px={{base:5, md:10}}
          py={4}
          _hover={{ bg: colors.black }}
          mt={3}
        >
          Enroll
        </Button>}
      </Stack>
      <Image
        src={course?.image || "/zombie2.webp"}
        alt={course?.title}
        w={{base:"100%", md:"30%"}}
        mt={{base:10, md:0}}
      />
    </Flex>
  );
};

export default Hero;
