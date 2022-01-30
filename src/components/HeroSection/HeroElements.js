import styled from 'styled-components';


export const HeroContainer = styled.div `
/* background: #3366ff; */
display: flex;
/* justify-content: center; */
    /* justify-content: start; */
    background-color: #3366ff;
    margin-bottom: 205px;
    flex-direction: column;


align-items: center;
padding: 0 0px;
/* height: 800px; */
height: 600px;

position: relative;
z-index: 1;
`

// export const HeroBg = styled.div `
// position: absolute;
// top: 0;
// right: 0;
// bottom: 0;
// left: 0;
// width: 100%;
// height: 100%;
// overflow: hidden;
// `




export const VideoBg = styled.video `
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232834;
`


export const HeroContent = styled.div `
z-index: 3;
/* z-index: 1; */
max-width: 1200x;
/* max-width: 1100px; */
width: 100%;
position: absolute;
padding: 8px 24px;
/* padding: 0 24px; */
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0 auto ;
padding-top: 140px;


`
export const HeroH1 = styled.h1 `
color:#fff;
font-size: 38px;
/* text-align: center; */
display: flex;
justify-content: start;

@media screen and (max-width: 760px) {
    font-size: 40px;
    display: flex;
    justify-content: start;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
    display: flex;
justify-content: start;
}
`

export const HeroP = styled.p `
margin-top: 8px;
color: #fff;
font-size: 34px;
/* text-align: center; */
display: flex;
justify-content: start;
max-width: 600px;
text-align: left;
/* width: 63%; */




@media screen and (max-width: 760px) {
    font-size: 24px;
    display: flex;
    justify-content: start;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
    display: flex;
justify-content: start;
}
`


export const HeroP2 = styled.p `
margin-top: 10px;
color: #fff;
font-size: 15px;
/* text-align: center; */
display: flex;
justify-content: start;
/* max-width: 600px; */
text-align: left;
/* width: 63%; */
margin-bottom: 40px;




@media screen and (max-width: 760px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const DarkButton = styled.button `
height: 50px;
width: 200px;
left: 0px;
top: 215px;
border-radius: 8px;
cursor: pointer;
background-color: #1E3076;
color: #fff;
font-weight: bold;
:hover{
    text-decoration: underline;
}
`


export const Image = styled.img `
width: 500px;
`

export const Column = styled.div `
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
`

export const ColumnContent = styled.div `
display: flex;
flex-direction: column;
/* margin-bottom: 80px; */

`
export const Swile = styled(Image)
`
width: 70px;
`

export const Spendesk = styled(Image)
`
width: 150px;
margin-top: 3px;
margin-left: 25px;

`

export const TrustIcons = styled.span `
display: flex;
width: 20%;
align-items: center;
/* justify-content: space-between; */
margin-left: 25px;
`

export const TrustContent = styled.div `
margin-top: 70px;
display: flex;
align-items: center;
color: #fff;
position: absolute;
bottom: -30px;
`

export const HeroWrapper = styled.div `
display: flex;
flex-direction: column;
`