import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../assets/colors";
import { testimonials } from "../../utils/sample_data";

const Testimonials = () => {
  return (
    <Stack py={{ base: 10, lg: 32 }} align={"center"}>
      <Text
        fontSize={14}
        color={"rgba(255, 255, 255, 0.5)"}
        bg={colors.green}
        px={2}
        py={1}
        borderRadius={5}
      >
        The Undying Truth
      </Text>
      <Text textAlign={'center'} fontSize={{base:32, lg:36}} color={colors.red}>
        Zombie Metamorphosis Stories
      </Text>
      <Text textAlign={'center'} fontSize={18} mb={10} color={"rgba(255, 255, 255, 0.5)"}>
        Hear the haunting tales of the formerly undead who conquered humanity.
      </Text>
      <Flex px={{ base: "5%", lg: "10%" }} justify={{base:"center", lg:"space-between"}} flexWrap={'wrap'}>
        {testimonials.map((column, index) => (
          <Stack w={{base:"100%", md:"51%", lg:"30%"}} key={index} spacing={"24px"}>
            {column.map((testimonial, index) => (
              <Stack
                key={index}
                p={5}
                bg={"rgba(220,220,220, 0.1)"}
                color={"rgba(255, 255, 255, 0.5)"}
                borderRadius={10}
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                <Flex align={"center"} gap={2}>
                  <Avatar
                    src={testimonial.image}
                    size="md"
                    name={testimonial.name}
                    ml={-2}
                    loading="lazy"
                  />
                  <Stack gap={0} fontSize={14}>
                    <Text fontWeight={700}>{testimonial.name}</Text>
                    <Text fontSize={12}>{testimonial.handle}</Text>
                  </Stack>
                </Flex>

                <Text>{testimonial.testimonial}</Text>
              </Stack>
            ))}
          </Stack>
        ))}
      </Flex>
    </Stack>
  );
};

export default Testimonials;
