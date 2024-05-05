import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { colors } from "../../assets/colors";
import CinematicStudies from "./CinematicStudies";
import BookShelf from "./BookShelf";
import News from "./News";

const ResourceList = () => {
  return (
    <Box
      px={{ base: "5%", lg: "10%" }}
      py={{ base: 10, lg: 32 }}
      color={`rgba(255, 255, 255, 0.5)`}
    >
      <Tabs>
        <TabList borderBottomColor={`rgba(255, 255, 255, 0.25)`} >
          <Tab
            _selected={{ borderBottomColor: colors.red, color: colors.red }}
            _active={{ bg: "transparent" }}
            fontSize={{base:12, md:14}}
          >
            Cinematic Studies
          </Tab>
          <Tab
            _selected={{ borderBottomColor: colors.red, color: colors.red }}
            _active={{ bg: "transparent" }}
            fontSize={{base:12, md:14}}
          >
            The Reanimated Bookshelf
          </Tab>
          <Tab
            _selected={{ borderBottomColor: colors.red, color: colors.red }}
            _active={{ bg: "transparent" }}
            fontSize={{base:12, md:14}}
          >
            Necrotic News Feeds
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CinematicStudies />
          </TabPanel>
          <TabPanel>
            <BookShelf />
          </TabPanel>
          <TabPanel>
            <News />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ResourceList;
