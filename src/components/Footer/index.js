import React from "react";
import {
  FooterContainer,
  LogoCol,
  ColWrapper,
  LogoImage,
  FooterLink,
  FeaturesCol,
  ColTitle,
  ColContent,
  AboutCol,
  OthersCol,
  SocialsCol,
  SocialContent,
  SocialIcon,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <LogoCol>
        <LogoImage src={require("../../images/logo-numeral.png")}></LogoImage>
      </LogoCol>
      <ColWrapper>
      <FeaturesCol>
        <ColTitle>Features</ColTitle>
        <ColContent>
        <FooterLink>Platform</FooterLink>
        <FooterLink>Coverage</FooterLink>
        <FooterLink>API Docs</FooterLink>
        <FooterLink>Security</FooterLink>
        </ColContent>
      </FeaturesCol>
      <AboutCol>
      <ColTitle>About</ColTitle>
      <ColContent>
      <FooterLink>About Us</FooterLink>
      <FooterLink>Careers</FooterLink>
      <FooterLink>Blog</FooterLink>
      </ColContent>
      </AboutCol>
      <OthersCol>
      <ColContent>
      <FooterLink>Use Cases</FooterLink>
      <FooterLink>FAQ</FooterLink>
      <FooterLink>Mentions Légales</FooterLink>
      </ColContent>
      </OthersCol>
      <SocialsCol>
      <ColTitle>Social</ColTitle>
      <ColContent>
      <FooterLink href="https://www.linkedin.com/company/joinnumeral"><SocialContent><SocialIcon src={require("../../images/linkedin.png")}/>LinkedIn</SocialContent></FooterLink>
      <FooterLink href="https://twitter.com/joinnumeral"><SocialContent><SocialIcon src={require("../../images/twitter.png")}/>Twitter</SocialContent></FooterLink>
      </ColContent>
      </SocialsCol>
      </ColWrapper>
    </FooterContainer>
  );
};

export default Footer;
