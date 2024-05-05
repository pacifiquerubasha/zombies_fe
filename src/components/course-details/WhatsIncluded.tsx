import { Stack, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../assets/colors";
import { FaYoutube } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";

interface Props {
  course: any;
}

const WhatsIncluded: React.FC<Props> = ({ course }) => {
  const icons = {
    video: <FaYoutube fontSize={36} />,
    text: <IoBook fontSize={36} />,
    certificate: <PiCertificateFill fontSize={36} />,
  };

  return (
    <Stack
      bg={"rgba(220,220,220, 0.1)"}
      color={colors.brown}
      py={{base:10, md:16, lg:20}}
      px={{ base: "5%", lg: "10%" }}
    >
      <Text fontSize={{base:32, md:36}}>What's Included</Text>
      <Wrap spacing={"5%"} spacingY={{base:"20px", md:0}} py={5}>
        {course?.included.map((item: any, i: number) => {
          const iconType = item?.type as keyof typeof icons;
          const icon = icons[iconType];
          return (
            <Stack
              key={i}
              align={"center"}
              gap={2}
              border={`1px solid rgba(255, 255, 255, 0.5)`}
              px={{base:4, md:10}}
              py={5}
              maxW={{md:"30%"}}
              textAlign={'center'}
              w={{base:'100%', md:'auto'}}
            >
              {icon}
              <Text>
                {item.quantity} {item.label}
              </Text>
            </Stack>
          );
        })}
      </Wrap>
    </Stack>
  );
};

export default WhatsIncluded;
