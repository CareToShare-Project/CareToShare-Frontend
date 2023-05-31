import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    padding: 15px;
    
    
    
`

export const SearchBox = styled.div`
    display: flex;
    width: 35%;
    align-items: center;
    border: 2px solid ${({theme})=> theme.background.primary};
    border-radius: 10px;
    outline: 0px;
    
    

    &:focus{
            border: 2px solid ${({theme})=> theme.color.hover2};;
        }

        .search-btn{
        width: 300px;
        height: 35px;
        border-radius: 10px;
        outline: 0px;
        background: none;
        border: 0px;
        text-indent: 20px;
        color: ${({theme})=> theme.background.primary};
        font-size: 20px;
        letter-spacing: 2px;
    }    

        .search-icon{
            font-size: 22px;
            opacity: 0.7;
            
        }
`