import styled , {keyframes} from 'styled-components'
import { ConfirmButton } from '../../DonorPage/DonorStyles'

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
        color: #4E31AA;
    }
    to{
        transform: rotate(360deg)
    }
`
const slideIn = keyframes`
    from{
        transform: translateX(-100%)
    }
    to{
        transform: translateX(0%)
    }
`

export const SideBarContainer = styled.div`
    flex: 1;
    height: 100vh;

    .show{
        @media (max-width: 650px){
            display: block;
            position: fixed;
            z-index: 2;
            left: 0px;
            animation: ${slideIn} 600ms ease-in-out;
        }
    }

    .menu-bar{
        background:${({theme})=> theme.background.primary};
        @media (max-width: 413px){
        
        }
    }

`
export const SideBarWrapper = styled.div`
    width: 280px;
    min-width: 265px;
    position: relative;
    z-index: 1;
    height: 100vh;
    background: ${({theme})=> theme.background.primary};
    box-shadow: 0px 5px 10px black;
    overflow-y: scroll;
    overflow-x: hidden;

    @media (max-width: 650px){
        display: none;
    }
    
`

export const MenuBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    z-index: 2;
    margin-right: 30px;
    font-size: 27px;
    cursor: pointer;
    color: white;
    background:${({theme})=> theme.background.primary} ;
    height: 100vh;
    width: 40px;
    text-align: center;

    @media (max-width: 650px){
        display: block;
        margin-right: 60px;
        background: transparent;
        z-index: 5;
    }
    

`

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    div{
        color: white;
        font-size: ${({theme})=> theme.fontSizes.small};
        font-family: Inter;
        span{
            font-family: Roboto;
            margin-left: 5px;
            color: ${({theme})=> theme.background.secondary};
        }
    }
`

export const EditProfileButton = styled(ConfirmButton)`
    width: 150px;
    transition: all 500ms ease-in-out;

    &:hover{
        width: 150px;
        color: white;
    }
`

export const LogoutWrapper = styled(EditProfileButton)`
    width: 100px;
    height: 30px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        width: 100px;
        color: red;
    }
`

export const ProfileImage = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid ${({theme})=> theme.color.hover};
    height: 90px;
    width: 90px;
    border-radius: 50%;
`
//color: #b1bcd3;
export const FeaturesWrapper = styled.ul`
    width: 100%;
    color: white;
    gap: 5px;
    display: grid;
    margin-top: 30px;


    #active{
        background: ${({theme})=> theme.color.hover};
        color: ${({theme})=> theme.color.primary};
        font-weight: 500;
        border-top-right-radius: 10px;
    }
    .feature{
        list-style-type: none;
        width: 262px;
        height: 50px;
        display: flex;
        margin-left: -30px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: Poppins;
        cursor: pointer;
        transition: all 500ms ease-in-out;

        #rotate{
            animation: ${rotateAnimation} 3s ease-in-out infinite;
        }
        .icon{
            flex: 30%;
            display: grid;
            place-items: center;
        }

        .title{
            flex: 70%;
            font-size: 17px;
            font-weight: 500;
        }
        &:hover{
            background: ${({theme})=> theme.color.hover};
            color: ${({theme})=> theme.color.primary};
            border-top-right-radius: 10px;
        }


    }

`