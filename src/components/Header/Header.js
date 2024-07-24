import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, NavProductsIcon, SocialIcons,Span } from './HeaderStyles';
import { HiEnvelope } from "react-icons/hi2";
const Header = () =>  (
  <Container>
   
    <Div1>
    <Link href="/" legacyBehavior>
    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
      <img src="./images/C.svg" alt="Logo" style={{ width: '6rem', height: '6rem' }} />
<Span >Diya Chaudhari</Span>
      
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
          <NavLink href="#Projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#Technologies">Skills</NavLink> 
      </li>
      <li>  
        <NavLink href="#Timeline">About</NavLink>  
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Diyac004" target='_blank'>
      <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons  href="https://www.linkedin.com/in/diya004/" target='_blank'>
      <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto: diyachaudhari004@gmail.com" target='_blank' >
        <HiEnvelope size="3rem"/>
        </SocialIcons>
      <SocialIcons href="https://www.instagram.com/diya__004_?igsh=Y3V1cGJveDVhOW16" target='_blank' >
      <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
