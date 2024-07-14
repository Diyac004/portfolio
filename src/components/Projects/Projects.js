import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    
    <SectionTitle main>Projects</SectionTitle>
    <SectionDivider/>
    <GridContainer>
      {projects.map(({id,image,title,description,tags, video,visit})=>(
        <BlogCard key={id}>
      
          <Image src={image}
          alt="shoe image"/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Team Members: Ricardo, Kyle, Mackenzie</TitleContent>
              <TagList>
                {tags.map((tag,i)=> (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={video}>Video</ExternalLinks>

          </UtilityList>
          </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;