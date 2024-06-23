import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { AiOutlineCode,AiOutlineUser} from "react-icons/ai";

const Technologies = () =>  (
  <Section id = "tech">
    
    <SectionTitle>Skills</SectionTitle>
    <SectionDivider/>
    <br/>
    <SectionText>
    I'm still exploring and learning new technologies in the programming world.
    </SectionText>
  <List>
    <ListItem>
   
      <ListContainer>
        <ListTitle> <AiOutlineUser size="3rem"/> Soft-Skills</ListTitle>
        <ListParagraph>
        Communication<br/>Teamwork<br/>Leadership<br/>Problem-solving<br/>Work ethic   
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
   
      <ListContainer>
        <ListTitle> <AiOutlineCode size="3rem" /> Programming
        </ListTitle>
        <ListParagraph>
        C<br/>Java<br/>HTML/CSS<br/>JavaScript
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
