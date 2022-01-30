import styled from 'styled-components'
// import { HeroContainer,  HeroH1, HeroP, HeroP2, TrustContent, TrustIcons, Swile, Spendesk} from '../HeroSection/HeroElements';

export const FooterContainer = styled.div `
    display: flex;
    background-color: #0F183B;
    flex-direction: row;
    color: #fff;
    padding-top: 50px;
    padding-bottom: 70px;
    padding-left: 210px;
    padding-right: 80px;
`

export const LogoCol = styled.div `
display: flex;
flex-direction: column;
`

export const ColWrapper = styled.div `
display: flex;
width: 100%;
justify-content: space-evenly;
`

export const LogoImage = styled.img `
width: 300px;
`

export const FooterLink = styled.a `
cursor: pointer;
color: #fff;
text-decoration: none;

:hover{
    text-decoration: underline;
}
`

export const FeaturesCol = styled.div `
display: flex;
flex-direction: column;
flex: initial;

`

export const ColTitle = styled.p `
font-weight: bold;
margin-bottom: 20px;
`

export const ColContent = styled.div `
display:flex;
flex-direction: column;
line-height: 2;
`

export const AboutCol = styled.div `
display: flex;
flex-direction: column;
`

export const OthersCol = styled.div `
display: flex;
flex-direction: column;
padding-top: 40px;
`

export const SocialsCol = styled.div `
display: flex;
flex-direction: column;
`

export const SocialContent = styled.div `
display: flex;
align-items: center;
margin-bottom: 5px;
`

export const SocialIcon = styled.img `
margin-right: 5px;
`