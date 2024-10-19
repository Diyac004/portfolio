import React, { useEffect, useRef } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, VideoContainer, StyledVideo } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import AOS from 'aos';
import 'aos/dist/aos.css';
const projectsData = [
    {
        title: 'ORBIT',
        description: 'ORBIT is an AI-powered travel planning tool, designed to efficiently generate personalized itineraries based on user inputs like destination, budget, and travel days. Targeted at frequent travelers and budget-conscious users, it integrates Google authentication, FlightLabs, and Gemini AI to provide real-time travel data, ensuring seamless trip planning. Built using FastAPI, it streamlines the planning process, making it ideal for users seeking both convenience and cost-effectiveness.',
        image: './images/orbit.png',
        tags: '[Nextjs, TypeScript, Tailwind CSS, Node.js, FlightLabs API , Gemini AI API, Vercel]',
        teamMembers: 'Anay, Chakshu, Rishith',
        code: 'https://github.com/Diyac004/sunhacks-orbit/tree/frontend',
        demo: 'https://arc.net/l/quote/cktiukwk'
      },
  {
    title: 'All Seeing Boots',
    description: 'Designed and developed smart shoes for the visually impaired using Raspberry Pi and Python, which enable obstacle detection and assess surface safety. Seamlessly integrated the hardware and software components to enhance the user experience.',
    image: './images/5.png',
    tags: '[Raspberry Pi, Python]',
    teamMembers: 'Ricardo, Kyle, Mackenzie',
    code: 'https://github.com/memcca14/Master-Project',
    demo: 'https://youtu.be/_lTmuviq2Y0'
  },
  {
    title: 'Inventory Management',
    description: 'Developed a comprehensive inventory management web application that allows shop owners to track inventory levels across multiple store locations in real time. It integrates advanced AI algorithms to analyze sales data and provide actionable suggestions on which items to stock more heavily to maximize profits. The intuitive user interface ensures ease of use, while the real-time database management through Firebase guarantees up-to-date inventory tracking and reporting.',
    image: './images/inventory.png',
    tags: '[JavaScript, Tailwind CSS, Gemini AI API, Firebase]',
    code: 'https://github.com/Diyac004/inventory-ai',
    demo: 'https://youtu.be/JMY6sydLozc?si=msDWU2iPIT7alhW5'
  },
  {
    title: 'PromptME',
    description: 'PromptME is a platform for modern world to discover, create and share their Real-Life experiences and help others in the similar scenarios to make the right decision.',
    video: './images/promptmevid.mp4',
    tags: '[Nextjs, JavaScript, HTML/CSS, MongoDB, Vercel, Google Cloud Console]',
    code: 'https://github.com/Diyac004/prompts',
    demo: 'https://www.youtube.com/watch?v=UB0M1Uu1zNQ'
  },
];

const Projects = () => {
  const gridRef = useRef(null);
  useEffect(()=>{
    AOS.init()
  },[]);
  useEffect(() => {
    const resizeGridItems = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap-2'));

      const items = grid.getElementsByClassName('grid-item');
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const contentHeight = item.querySelector('.content').getBoundingClientRect().height;
        const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
        item.style.setProperty('--row-span', rowSpan);
      }
    };

    resizeGridItems();
    window.addEventListener('resize', resizeGridItems);


    const images = gridRef.current.getElementsByTagName('img');
    for (let img of images) {
      img.addEventListener('load', resizeGridItems);
    }

    return () => {
      window.removeEventListener('resize', resizeGridItems);
      for (let img of images) {
        img.removeEventListener('load', resizeGridItems);
      }
    };
  }, []);

  return (
    <Section id='Projects'>
     <SectionTitle data-aos="fade-right">Projects</SectionTitle>
      <SectionDivider />
      <GridContainer ref={gridRef}>
        {projectsData.map((project, index) => (
          <BlogCard key={index} className="grid-item" data-aos="zoom-in">
            <div className="content">
              {project.image ? (
                <Img src={project.image} alt={project.title} />
              ) : project.video ? (
                <VideoContainer>
                  <StyledVideo>
                    <source src={project.video} type="video/mp4" />
                  </StyledVideo>
                </VideoContainer>
              ) : null}
              <TitleContent>
                <HeaderThree title>{project.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo data-aos="zoom-in">{project.description}</CardInfo>
              {project.teamMembers && (
                <TitleContent>Team Members: {project.teamMembers}</TitleContent>
              )}
              <div>
                <TagList>
                  <Tag>{project.tags}</Tag>
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks data-aos="flip-down" href={project.code} target="_blank">Code</ExternalLinks>
                <ExternalLinks data-aos="flip-down" href={project.demo} target="_blank">Video</ExternalLinks>
              </UtilityList>
            </div>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};


export default Projects;

