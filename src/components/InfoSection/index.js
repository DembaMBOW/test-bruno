import React from 'react'

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Coverage, UserCases, ApiDoc, ImgWrap,  Img, Logo, LogoCoverage, LightButton, TitleSpan } from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, title, buttonTitle, lightText, usercases, darkText, description, img, alt, logo }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                  <TextWrapper>
                    <LogoCoverage>
                     <Logo src={logo}></Logo>
                      <Coverage>{title}</Coverage>
                    </LogoCoverage>
                      <UserCases lightText={lightText}>{usercases}</UserCases>
                      <ApiDoc darkText={darkText}>{description}</ApiDoc>
                      <LightButton>Explore <TitleSpan>{buttonTitle}</TitleSpan></LightButton>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                  <ImgWrap>
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
