import React, {useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiOutlineCode,AiOutlineUser} from "react-icons/ai";
import { FaCoins } from "react-icons/fa";

const Technologies = () =>  {

  useEffect(()=>{
    AOS.init()
  },[]);

  return (
  <Section id = "Technologies">
    
    <SectionTitle data-aos="fade-right">Skills</SectionTitle>
    <SectionDivider/>
    <br/>
    <SectionText>
    I'm still exploring and learning new technologies in the programming world.
    </SectionText>
  <List>
    <ListItem>
   
      <ListContainer>
        <ListTitle data-aos="zoom-in-up"> <AiOutlineUser size="3rem"/> Soft-Skills</ListTitle>
        <ListParagraph data-aos="zoom-in-up">
        Communication<br/> 
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
       Teamwork<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
        Leadership<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
        Problem-solving<br/> 
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
       Work ethic   
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
   
      <ListContainer>
        <ListTitle data-aos="zoom-in-up"> <AiOutlineCode size="3rem" /> Programming
        </ListTitle>
        <ListParagraph data-aos="zoom-in-up">
        Python<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
        Java<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
       HTML/CSS<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
        JavaScript
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
    <ListContainer>
        <ListTitle data-aos="zoom-in-up"> <FaCoins size="3rem"/> Framework & Database
        </ListTitle>
        <ListParagraph data-aos="zoom-in-up">
        Nextjs<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
        MongoDB<br/>
        </ListParagraph>
        <ListParagraph data-aos="zoom-in-up">
        Firebase<br/>
        </ListParagraph>
      </ListContainer>
      </ListItem>
  </List>
  </Section>
);
};

export default Technologies;
