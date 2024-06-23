import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href= "/" legacyBehavior>
      <a style={{display: "flex", alignItems:"center", color:"white", marginBottom: '20'}}>
        <DiCssdeck size="3rem"/><Span >Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" ></Link>
        <NavLink>Projects</NavLink>
      </li>
      <li>
        <Link href="#projects" ></Link>
        <NavLink>Skills</NavLink>
      </li>
      <li>
        <Link href="#projects" ></Link>
        <NavLink>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Diyac004">
      <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/diya004/">
      <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/diya__004_?igsh=Y3V1cGJveDVhOW16">
      <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
