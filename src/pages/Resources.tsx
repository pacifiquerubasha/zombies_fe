import { Stack, Text } from "@chakra-ui/react";
import { colors } from "../assets/colors";
import Layout from "../components/Layout";
import { lazy } from "react";

const Featured = lazy(() => import('../components/resources/Featured'));
const ResourceList = lazy(() => import('../components/resources/ResourceList'));


const Resources = () => {
  return (
    <Layout>
      <Stack pb={{base:10, md:20, lg:32, xl:48}} pt={{base:'25vh'}}>
        <Text
          textAlign={"center"}
          color={colors.red}
          fontSize={{ base: 24, md: 32, lg: 36 }}
          fontWeight={700}
        >
          Additional Resources
        </Text>
        <Text
          textAlign={"center"}
          color={colors.brown}
          fontSize={{base:16, md:20}}
          w={"70%"}
          mx={"auto"}
        >
          Unlock the Undead Vault: Extra Brain Bites for Zombies. Dive Deeper
          into Survival Tactics and Unlife Strategies with Exclusive Content.
        </Text>
      </Stack>

      <Featured />

      <ResourceList />
    </Layout>
  );
};

export default Resources;
