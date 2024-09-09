import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    <Typewriter
onInit={(typewriter) => {
  typewriter.typeString('Welcome')
    .callFunction(() => {
      console.log('String typed out!');
    })
    
    
    .callFunction(() => {
      console.log('All strings were deleted');
    })
    .start();
}}
/>
<Typewriter
onInit={(typewriter) => {
  typewriter.typeString(' ')
  .pauseFor(1100)
  typewriter.typeString('To My Portfolio')
    .start();
}}
/>
    </SectionTitle>
    <SectionText>
      I'm Diya Chaudhari, undergradute student at Arizona State Unviersity, majoring in Computer Science.
    </SectionText>
    <Button onClick={() => window.open('./DIYA__RESUME.pdf','_blank')}>Download Resume</Button>
  </LeftSection>
 </Section>
);
};

export default Hero;