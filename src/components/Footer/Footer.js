import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { HiEnvelope } from "react-icons/hi2";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>E-mail</LinkTitle>
      <LinkItem href="mailto: diyachaudhari004@gmail.com">diyachaudhari004@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Exploring the Tech World!</Slogan>
        </CompanyContainer>
      
        <SocialIcons href="https://github.com/Diyac004" target='_blank' >
        <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/diya004/" target='_blank' >
        <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://x.com/Diya_004_" target='_blank' >
        <FaXTwitter size="3rem"/>
        </SocialIcons>
        <SocialIcons href="mailto: diyachaudhari004@gmail.com" target='_blank' >
        <HiEnvelope size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/diya__004_?igsh=Y3V1cGJveDVhOW16" target='_blank' >
        <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
