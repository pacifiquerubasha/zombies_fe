import { Box, Button, Stack, Text, Wrap } from '@chakra-ui/react';
import { colors } from '../../assets/colors';
import { NavLink } from 'react-router-dom';

const News = () => {
    const newsData = [
        {
          title: 'Zombie Integration Initiative Receives Positive Feedback',
          description: 'The Zombie Integration Initiative has received positive feedback for promoting understanding between zombies and humans.',
          link: 'https://www.reddit.com/r/civ/comments/n0a5wh/a_positive_feedback_loop_occurred_in_zombie/', 
        },
        {
          title: 'Zombie-Human Relations Reach New Milestone',
          description: 'Zombie-human relations have reached a new milestone, with increased cooperation and understanding.',
          link: 'https://www.nytimes.com/2021/05/19/climate/climate-change-zombie-forest-fires.html', 
        },
        {
          title: 'Zombie Learning Platform Expands Course Offerings',
          description: 'The Zombie Learning Platform is expanding its course offerings to include history, art, and communication skills.',
          link: 'https://davecormier.com/edblog/2014/05/25/community-learning-the-zombie-resurrection/', 
        },
        {
          title: 'Zombie Community Celebrates Cultural Diversity Day',
          description: 'The zombie community celebrated Cultural Diversity Day with traditional dances, music, and cuisine.',
          link: 'https://www.researchgate.net/publication/303423150_Zombie_Culture_Dissent_Celebration_and_the_Carnivalesque_in_Social_Spaces', 
        },
        {
          title: 'Zombies Excel in Human Language Proficiency Tests',
          description: 'Many zombies have achieved fluency in multiple languages, showing their dedication to integration.',
          link: 'https://www.linkedin.com/pulse/20140920174825-7667043-how-technology-is-turning-us-into-zombies/', 
        },
        {
          title: 'Zombie Film Festival Showcases Cinematic Talent',
          description: 'The Zombie Film Festival showcased a diverse range of films exploring identity and society.',
          link: 'https://www.stwnewspress.com/news/zombie-film-featuring-oklahoma-talent-film-locations-to-be-featured-at-red-dirt-international-film/article_4a4cd0df-3d1c-54c3-bb19-a0562b83232e.html', 
        },
        {
          title: 'Zombie Business Leaders Host Networking Event',
          description: 'Zombie business leaders hosted a networking event to promote collaboration and economic growth.',
          link: 'https://www.linkedin.com/pulse/zombie-apocalypse-networking-survival-guide-gail-manigsaca-lni6c/', 
        },
        {
          title: 'Zombies Volunteer at Local Charity Event',
          description: 'Zombies volunteered at a charity event to raise awareness for important causes.',
          link: 'https://www.barnsleyhospitalcharity.co.uk/2013/11/13/people-of-barnsley-ran-for-their-lives-at-the-zombie-run/', 
        },
        {
          title: 'Zombie Art Exhibition Raises Awareness for Undead Artists',
          description: 'A zombie art exhibition raised awareness for undead artists, showcasing their talents.',
          link: 'https://mentalhealth411.substack.com/p/zombie-apocalypse', 
        },
    ];

    return (
        <Wrap spacing={'2.5%'} spacingY={'36px'}>
            {
                newsData.map((news, i)=>(
                    <Stack key={i} w={{base:"100%", md:"30%", lg:"23%"}} bgImage={"url('/hero.webp')"} bgSize={'cover'} p={5} borderRadius={10} overflow={'hidden'} pos={'relative'} isolation={'isolate'}>
                        <Box
                            zIndex={-1}
                            bgGradient="linear-gradient(180deg, rgba(26,32,44,0.5) 0%, rgba(26,32,44,0.95) 30%)"
                            w={"100%"}
                            h={"100%"}
                            pos={"absolute"}
                            left={0}
                            top={0}
                        />
                        <Text>News</Text>
                        <Text color={colors.red} fontSize={20} fontWeight={700} noOfLines={1}>{news.title}</Text>
                        <Text noOfLines={3}>{news.description}</Text>
                        <Button
                            color={colors.brown}
                            fontSize={16}
                            bg={"transparent"}
                            border={`1px solid ${colors.red}`}
                            borderRadius={0}
                            px={5}
                            _hover={{ bg: colors.black }}
                            as={NavLink} to={news.link} target='_blank'
                        >
                        Explore
                        </Button>
                    </Stack>
                ))
            }
            
        </Wrap>
    );
};

export default News;