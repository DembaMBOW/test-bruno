import React from 'react'
import {ServicesContainer, ServicesWrapper,  ServicesH1, ServicesP, Spendesk, Swile, TrustContent, TrustIcons} from './ServicesElements'
import { DarkButton } from '../HeroSection/HeroElements'
const Services = () => {
    return (
      <ServicesContainer>
        <ServicesWrapper>
        <ServicesH1> Payement automation</ServicesH1>
                <ServicesP>for tech companies</ServicesP>
                </ServicesWrapper>
                <DarkButton>Talk to an expert →</DarkButton>
                <TrustContent>
                    They trust us!
                 <TrustIcons>
                 <Swile src={require('../../images/swile.png')}/>
                 <Spendesk src={require('../../images/logo-services.png')}/>
                 </TrustIcons> 
                 </TrustContent>
            
      </ServicesContainer>
      
    )

}

export default Services