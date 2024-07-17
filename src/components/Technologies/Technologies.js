import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiOutlineCode,AiOutlineUser} from "react-icons/ai";

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
        C<br/>
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
  </List>
  </Section>
);
};

export default Technologies;
