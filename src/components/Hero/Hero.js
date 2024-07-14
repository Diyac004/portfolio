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
    <Button onClick={() => window.location='/Users/diya/Documents/portfolio_website/public/DIYA_RESUME.pdf'}>Download Resume
    </Button>
  </LeftSection>
 </Section>
);

export default Hero;