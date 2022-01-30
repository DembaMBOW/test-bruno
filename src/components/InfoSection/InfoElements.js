import styled from 'styled-components'

export const InfoContainer = styled.div `
color: #fff;
/* background: ${({ lightBg }) => (lightBg ? '#f9f9f9f9' : '#010606')}; */


@media screen and (max-width: 768px){ 
 padding: 100px 0;
}
`
export const InfoWrapper = styled.div `
display: grid;
z-index: 1;
height: 860%;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const InfoRow = styled.div `
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => 
    imgStart ? `
'col2 col1 '
` : `
'col1 col2 '
` };

@media screen and(max-width: 768px) {
     grid-template-areas: ${({imgStart}) => 
     imgStart ? `
'col1'
'col2'
` : `
'col1 col1'
'col2 col2'
`};
}
`

export const Column1 = styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div `
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
/* display: flex;
justify-content: flex-start; */
`;

export const Coverage = styled.p `
color: #3366ff;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
/* margin-bottom: 16px; */
margin-left: 15px;

/* display: flex;
justify-content: flex-start; */
`;

export const Logo = styled.img `

`;

export const UserCases = styled.h1 `
color: rgba(9, 12, 23, 1);
margin-bottom: 24px;
font-size: 38px;
line-height: 1.1;
font-weight: 600;
};

@media screen and (max-width: 480px) {
font-size: 32px;
}
`;

export const ApiDoc = styled.p `
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 41.8px;
color: rgba(97, 101, 117, 1);
`

export const ImgWrap = styled.div `
max-width: 555px;
height: 100%;

`

export const Img = styled.img `
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export const LogoCoverage = styled.div `
display: flex;
align-items: center;
`;


export const LightButton = styled.button `
height: 50px;
width: 200px;
left: 0px;
top: 215px;
border-radius: 8px;
/* padding: 22px, 24px, 22px, 24px; */
background-color: #EAEEFF;
color: #3B61F4;
font-weight: bold;
border: none;
/* text-transform: capitalize; */
`

export const TitleSpan = styled.span `
text-transform: lowercase;
`