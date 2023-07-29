import styled, {keyframes} from "styled-components";

//animations


const itemsAnimate = keyframes`
    0%{
        transform: translateX(0px);
        
    }
   50%{
        transform: translateX(5px);
   }
    100%{
        transform: translateX(0px);
    }
`
export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
`

export const LeftSideContainer = styled.div`
    width: 55%;
    height: 100vh;

`

export const RightSideContainer = styled.div`
    display: flex;
    text-align: center;
    width: 45%;
    height: 100vh;
    border-left: 10px inset ${({theme})=> theme.color.border};
    color: ${({theme})=> theme.color.primary};
    background-color: ${({theme}) => theme.background.primary};
`

export const RightSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 10px 0;  
    padding: 10px 5px;
   
`
export const AppTitleWrapper = styled.header`
    font-family: Noto Sans, sans-serif;
    font-weight: 800;
    font-size: ${({theme})=> theme.fontSizes.large};
    color: ${({theme})=> theme.color.secondary};
    letter-spacing: 5px;
    width: 80%;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .about{
        font-size : 14px;
        font-weight: 800;
        font-family: Poppins;
        color: ${({theme})=> theme.color.primary};
    }
`
export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0.6;
    font-family: Poppins;
    animation: ${itemsAnimate} 3s ease-in-out infinite;
    
    &:hover{
        opacity: 1;
        cursor: pointer;
    }
`

export const CircularContainer = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    position: relative;
    color: ${({theme})=> theme.color.secondary};

    .item-1{
        top: -5%;
        left: 30%;
    }

    .item-2{
        top: 40%;
        right: -25%;
    }

    .item-3{
        top: 40%;
        left: -70px;
    }
    .item-4{
        bottom: -5%;
        left: 30%;
    }
`



export const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ReadMoreWrapper = styled.div`
    display: flex;
    gap: 5px;
    color: ${({theme})=> theme.color.primary};

    .link{
        color: ${({theme})=> theme.color.secondary};
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

`

export const GetStartedButton = styled.button`
    font-family: Poppins;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
    height: 40px;
    color: ${({theme})=> theme.color.primary};
    border-radius: 10px;
    margin: 0px auto;
    background: ${({theme})=> theme.color.hover};
    transition: all 400ms ease-in-out;

    &:hover{
        background: ${({theme})=> theme.background.primary};
        border: 1px solid ${({theme})=> theme.color.primary};
        color: ${({theme})=> theme.color.secondary};
        font-weight: 700;
    }
`

// landing page styles

const fadeFromRight = keyframes`
    to{
        transform: translateX(0px);
        opacity: 1;  
    }
`
const fadeFromLeft = keyframes`
    to{
        transform: translateX(0px);
        opacity: 1;  
    }
`
const fadeFromBottom = keyframes`
    to{
        transform: translateY(0px);
        opacity: 1;  
    }
`
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    
    
`
export const PageWrapper = styled.div`
    width: fit-screen;
    display: flex;
    flex-direction: column;
    gap: 10px;  
    position: relative;
   
`

export const ShadeContainer = styled.div`
    position: absolute;
    background: #1b5c61;
    opacity: 0.5;
    height: 111vh;
    width: 100vw;
    z-index: 200;
    @media (max-width: 450px){
            height: 155vh;
        }
    
`

export const NavigationContainer = styled.div`
    width: 100%;
    margin: 0px auto;
    padding: 20px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 300;
    position: relative;

    img{
        width: 100px;
        height: 100px;
    }

    .menu{
        display: none;
        @media (max-width: 450px){
              display: inline-block;
              color: white;
              cursor: pointer;
        }

        }
    .showMenu{
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 40px;
        gap: 15px;
        transform: translateX(70px);
        animation: ${fadeFromRight} 0.3s ease-in-out forwards;
        background: rgba(0,0,0,0.5);
        padding: 20px;
        border-radius: 5px;
    }

    h3{
        letter-spacing: 1.3px;  
        color: white;
    }

    div{
        display: flex;
        align-items: center;
        gap: 40px;

        @media (max-width: 450px){
              display: none;

        }

        span{
            font-family: Poppins;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.9px;
            color: white;
            cursor: pointer;
            transition: color 0.3s;

            &:hover{
                color :${({theme})=> theme.background.primary};
                
            }
        } 
        
    }

    @media (max-width: 860px){
            padding: 10px 5px; 
        }
`
export const BodyContainer = styled.div`
    width: 100%;
    padding: 30px 100px;
    height: 200px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 300;
    @media (max-width: 860px){
            padding: 10px 0px; 
    }

    @media (max-width: 750px){
            height: 100vh;
        }


    
     h1{
        transform: translateX(70px);
        letter-spacing: 2px;
        color: white;
        font-size: 43px;
        text-align: center;
        opacity: 0;
        font-family: Playfair Display, serif;
        animation: ${fadeFromRight} 1s ease-in-out forwards;

        @media (max-width: 860px){
            font-size: 30px; 
            text-align: center;
    }
    }

    p{
        color: ${({theme})=> theme.color.secondary}; 
        font-weight: 500;
        font-family: Roboto;
        transform : translateX(32px);
        opacity: 0;
        font-size: 16px;
        width: 62%;
        text-align: center;
        animation: ${fadeFromLeft} 1s ease-in-out forwards;

        @media (max-width: 450px){
            width: 95%;
        }

    }

    button{
        width: 200px;
        padding: 10px 0px;
        border-radius: 5px;
        font-weight: 700;
        color: white;
        font-family: Poppins;
        background: ${({theme})=> theme.background.primary};
        outline: 0;
        border: 0;
        transition: all 0.5s ease-in-out;
        box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.5);

        &:hover{
            transform : scale(1.05);
        }
    }
    
`

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    transform: translateY(32px);
    opacity: 0;
    gap: 2px;
    padding: 0px 0px;
    margin-top: 60px;
    animation: ${fadeFromBottom} 1s ease-in-out forwards;
    z-index: 300;


    div{
        width: 360px;
        height: 200px;
        background: rgba(0,0,0,0.4);
        padding: 10px;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: white;
        border-radius: 2px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover{
            background: rgba(0,0,0,0.9);
            transform : scale(1.05);

            p{
                opacity: 1;
            }
        }


        span{
            font-weight: 700;
            font-family: Poppins;
            margin-top: 5px;
            font-size: 16px;
            color: ${({theme})=> theme.background.primary}; 
        }
        p{
            opacity: 0.6;
            font-size: 14px;

           
        }

        @media (max-width: 1011px){
            width: 100%; 
    }
    }

    @media (max-width: 1011px){
       display: grid;
       grid-template-columns: 1fr 1fr;
       row-gap: 5px;
       padding: 10px;
    }
    @media (max-width: 450px){
            display:flex;
            flex-direction: column;
        }

`
