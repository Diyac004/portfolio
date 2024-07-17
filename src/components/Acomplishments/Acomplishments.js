import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import {data} from '../../constants/constants';


const Acomplishments = () => {
  useEffect(()=>{
    AOS.init()
  },[]);
  return(
  <Section >
    <SectionTitle data-aos="fade-right">Personal Achievements</SectionTitle>
    <SectionDivider/>
    <Boxes data-aos="flip-up">
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
  
);};

export default Acomplishments;
