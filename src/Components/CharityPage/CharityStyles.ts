import styled from 'styled-components'

export const TextWrapper = styled.textarea`
    height: 200px;
    border-radius: 5px;
    font-family: Poppins;
    font-weight: 400;
    text-indent: 5px;
    background: transparent;
    color: ${({theme}) => theme.color.primary};
    border: 2px solid white;
    cursor: pointer;

    &:focus{
        border: 2px solid ${({theme})=> theme.color.hover};
        outline: none;
    }
`