import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    padding: 10px;
    position: sticky;
    top: 0px;  
    background: ${({theme})=> theme.background.secondary};
    z-index: 200; 

    .search-btn{
        width: 300px;
        height: 35px;
        border-radius: 10px;
        margin-right: 32px;
        outline: 0px;
        border: 2px solid ${({theme})=> theme.background.primary};
        text-indent: 8px;
        font-family: Poppins;
        color: ${({theme})=> theme.background.primary};
        font-size: 20px;
        letter-spacing: 2px;


        &:focus{
            border: 2px solid ${({theme})=> theme.color.hover2};;
        }
    }
`