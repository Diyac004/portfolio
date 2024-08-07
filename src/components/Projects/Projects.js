import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, VideoContainer,StyledVideo } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Projects = () => (
  <Section nopadding id='projects'>
    
    <SectionTitle main>Projects</SectionTitle>
    <SectionDivider/>
    
    <GridContainer>
   
        <BlogCard>
      
          <Img src="./images/5.png"
          alt="shoe image"/>
          <TitleContent>
            <HeaderThree title>All Seeing Boots</HeaderThree>
            <Hr/>
            </TitleContent>
            <CardInfo>Designed and developed smart shoes for the visually impaired using Raspberry Pi and Python, which enable obstacle detection and assess surface safety. Seamlessly integrated the hardware and software components to enhance the user experience.</CardInfo>
            <div>
              <TitleContent>Team Members: Ricardo, Kyle, Mackenzie</TitleContent>
              <TagList>
             
                  <Tag>[Raspberry Pi, Python]</Tag>
                
              </TagList>
            </div>
          <UtilityList>
            <ExternalLinks href='https://github.com/memcca14/Master-Project' target='_blank'>Code</ExternalLinks>
            <ExternalLinks href='https://youtu.be/_lTmuviq2Y0' target='_blank'>Video</ExternalLinks>

          </UtilityList>
          </BlogCard>
          <BlogCard>
      
          <VideoContainer><StyledVideo controls><source src="./images/promptmevid.mp4" type='video/mp4'/> video not found.</StyledVideo></VideoContainer>
          <TitleContent>
            <HeaderThree title>PromptME</HeaderThree>
            <Hr/>
            </TitleContent>
            <CardInfo>PromptME is a platform for modern world to discover, create and share their Real-Life experiences and help others in the similar scenarios to make the right decision.</CardInfo>
            <div>
              <TagList>
             
                  <Tag>[Nextjs, JavaScript, HTML/CSS, MongoDB, Vercel, Google Cloud Console]</Tag>
                
              </TagList>
            </div>
          <UtilityList>
            <ExternalLinks href='https://github.com/Diyac004/prompts' target='_blank'>Code</ExternalLinks>
            <ExternalLinks href='https://www.youtube.com/watch?v=UB0M1Uu1zNQ' target='_blank'>Video</ExternalLinks>

          </UtilityList>
          </BlogCard>
     
     
    </GridContainer>
    
  </Section>
);

export default Projects;