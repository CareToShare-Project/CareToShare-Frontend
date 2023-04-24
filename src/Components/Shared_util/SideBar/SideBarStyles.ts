import styled from 'styled-components'
import { ConfirmButton } from '../../DonorPage/DonorStyles'

export const SideBarWrapper = styled.div`
    width: 20%;
    height: 100vh;
    background: ${({theme})=> theme.background.primary};
    box-shadow: 0px 5px 10px black;
    
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
        span{
            font-family: Poppins;
            margin-left: 5px;
            color: ${({theme})=> theme.color.hover};
        }
    }
`

export const EditProfileButton = styled(ConfirmButton)`
    width: 150px;

    &:hover{
        width: 150px;
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
    gap: 10px;
    display: grid;
    margin-top: 30px;


    #active{
        background: ${({theme})=> theme.color.hover};
        color: ${({theme})=> theme.background.primary};
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
            color: ${({theme})=> theme.background.primary};
            border-top-right-radius: 10px;
        }


    }

`