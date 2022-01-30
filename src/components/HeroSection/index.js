// import React, {useState} from 'react';
import "remixicon/fonts/remixicon.css";
import Video from '../../videos/video.mp4'
import { HeroContainer,  HeroContent, HeroH1, HeroP, HeroP2, DarkButton, Image, Column, ColumnContent, TrustIcons, Spendesk, Swile, TrustContent} from './HeroElements';

// import Image from '.././../images/body-img-video.png'

const HeroSection = () => {
    // const {hover, setHover} = useState(false)

    // const onHover = () => {
    //     setHover(!hover);
    // };
  return (  
      <HeroContainer>
            <HeroContent>
                <Column>
                <ColumnContent>
                <HeroH1> Payement automation</HeroH1>
                <HeroP>for tech companies</HeroP>
                <HeroP2>Automate payements across banks with a single API</HeroP2>
                <DarkButton>Talk to an expert →</DarkButton>
                <TrustContent>
                    They trust us!
                 <TrustIcons>
                 <Swile src={require('../../images/swile.png')}/>
                 <Spendesk src={require('../../images/logo-services.png')}/>
                 </TrustIcons> 
                 </TrustContent>
            
                </ColumnContent>
               
                </Column>
                
                <Column>
                <Image src={require('../../images/header-img.png')}/>
                </Column>
           
            </HeroContent>
    
      </HeroContainer>
  );
};

export default HeroSection;
