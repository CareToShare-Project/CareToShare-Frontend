import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 2px;
    justify-content: flex-end;
    padding: 0px 50px;
    
       
    
`

export const SearchBox = styled.div`
    display: flex;
    width: 300px;
    height: 30px;
    align-items: center;
    border: 2px solid ${({theme})=> theme.background.primary};
    border-radius: 10px;
    outline: 0px;
    position: relative;
    margin-top: 10px;
    @media (max-width: 930px){
        width: 80%;
    }
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
            color: ${({theme})=> theme.background.primary};
            font-size: 16px;
            letter-spacing: 2px;
        }    

        .search-icon{
            font-size: 25px;
            opacity: 0.5;
            position: absolute;
            left: 2px;
            
        }
`