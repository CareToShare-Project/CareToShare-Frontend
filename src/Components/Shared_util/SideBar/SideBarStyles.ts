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
    z-index: 100;
    border-right: 1px solid white;

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
        font-size: 30px;
        @media (max-width: 413px){
        
        }
    }

`
export const SideBarWrapper = styled.div`
    width: 230px;
    min-width: 230px;
    position: relative;
    z-index: 1;
    height: 100vh;
    padding: 15px 0px;
    background: ${({theme})=> theme.background.primary};
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media (max-width: 650px){
        display: none;
    }
    
`

export const MenuBar = styled.div`
    position: fixed;
    left: 0;
    top: 10px;
    display: none;
    z-index: 2;
    margin-right: 30px;
    background: transparent;
    font-size: 27px;
    cursor: pointer;
    color: white;
    width: 40px;
    text-align: center;

    @media (max-width: 650px){
        display: block;
        margin-right: 60px;
        z-index: 5;
    }
    

`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    .notification{
        cursor: pointer;
    }
    span{
        gap: 2px;
        .profile{
            cursor: pointer;    
        }
    }
  

    div{
        color: white;
        font-size: ${({theme})=> theme.fontSizes.small};
        font-family: Inter;
    }
`

export const Title = styled.header`
    color: white;
    font-family: Poppins;
    text-align: center;
    font-size: 22px;    
    font-weight: 600;
    letter-spacing: 4px;
    position: absolute;
    top: 25px;
    left: 8px;  
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
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20px;  
    left: 25%;
    &:hover{
        width: 100px;
        color: white;
    }
`


export const Pic = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`
//color: #b1bcd3;
export const FeaturesWrapper = styled.ul`
    width: 100%;
    color: white;
    gap: 2px;
    display: grid;
    position: absolute;
    top: 20%;   


    #active{
        background: ${({theme})=> theme.color.hover};
        color: ${({theme})=> theme.color.primary};
        font-weight: 500;
        border-top-right-radius: 10px;
    }
    .feature{
        list-style-type: none;
        width: 235px;
        height: 50px;
        display: flex;
        margin-left: -40px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-family: Poppins;
        font-size: 12px;
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
            font-size: 14px;
            font-weight: 500;
        }
        &:hover{
            background: ${({theme})=> theme.color.hover};
            color: ${({theme})=> theme.color.primary};
            border-top-right-radius: 10px;
        }


    }

`