import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 20px;
    
    
    
    
`

export const SearchBox = styled.div`
    display: flex;
    width: 450px;
    align-items: center;
    justify-content: space-between;
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
        width: 90%;
        height: 35px;
        border-radius: 10px;
        outline: 0px;
        background: none;
        border: 0px;
        text-indent: 25px;
        color: ${({theme})=> theme.background.primary};
        font-size: 20px;
        letter-spacing: 2px;
    }    

        .search-icon{
            font-size: 25px;
            opacity: 0.7;
            position: absolute;
            left: 2px;
            
        }
`