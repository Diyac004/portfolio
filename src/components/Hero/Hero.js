import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To<br/>
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Hello I'm Diya Chaudhari, a sophomore at Arizona State Unviersity majoring in Computer Science.
    </SectionText>
    <Button onClick={() => window.location='https://google.com'}>Download Resume
    </Button>
  </LeftSection>
 </Section>
);

export default Hero;