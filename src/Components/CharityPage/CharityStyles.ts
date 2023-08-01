import styled from 'styled-components'

export const TextWrapper = styled.textarea`
    height: 200px;
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 5px;
    background: transparent;
    width: 100%;
    color: ${({theme}) => theme.color.primary};
    border: 2px solid ${({theme}) => theme.color.primary};
    cursor: pointer;

    &:focus{
        border: 2px solid ${({theme})=> theme.color.hover2};
        outline: none;
    }
`

export const PostWrapper = styled.div`
    width: 80%;
    height: 500px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    border: 3px solid white;
    margin: 20px;

    @media (max-width: 480px){
        width: 100%;
        overflow-x: hidden;
        height: 600px;
        overflow-y: hidden;
        overflow-x: hidden;
    }
`

export const PostFieldWrapper = styled.div`
    width: 100%;
    padding: 30px 50px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 480px){
        flex-direction: column;
        padding: 20px 10px;
    }

    label{
        color: ${({theme}) => theme.background.primary};
        font-family: Poppins;
    }



    textarea{
        width: 70%;
        height: 200px;
        color: black;
        border: 2px solid ${({theme}) => theme.color.primary};
        cursor: pointer;
        font-size: 15px;
        font-family: Roboto;
        font-weight: 500;

        @media (max-width: 480px){
            width: 100%;
        }

        &:focus{
            border: 2px solid ${({theme})=> theme.color.hover2};
            outline: none;
        }
    }
    div{
        /* input[type="file"] {
            display: none;
        }

        .upload-images{
            display: inline-block;
            text-transform: uppercase;
            padding: 10px 40px;
            background: ${({theme}) => theme.background.primary};
            color: white; 
            border-radius: 5px;
            font-weight: 600;
            width: 300px;
            text-align: center;
            cursor: pointer;
        } */
    }
    
    
    

`
