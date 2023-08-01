import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 2px;
    justify-content: center;
    padding: 0px 50px;

    @media (max-width: 541px){
        padding: 0px 10px;
    }
    
       
    
`

export const SearchBox = styled.div`
    display: flex;
    width: 400px;
    height: 30px;
    align-items: center;
    font-family: Roboto;
    font-size: 13px;
    border: 2px solid ${({theme})=> theme.background.primary};
    border-radius: 10px;
    outline: 0px;
    position: relative;
    margin-top: 10px;
    &:focus{
            border: 2px solid ${({theme})=> theme.color.hover2};;
        }

        .search-btn{
            width: 100%;
            height: 35px;
            border-radius: 10px;
            outline: 0px;
            background: none;
            border: 0px;
            text-indent: 32px;
            color: ${({theme})=> theme.color.primary};
            font-size: 16px;
        }    

        .search-icon{
            font-size: 16px;
            opacity: 0.5;
            position: absolute;
            left: 10px;
            
        }

        @media (max-width: 541px){
            width: 100%;
        }
`