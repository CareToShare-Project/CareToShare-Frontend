import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    

    #visual{
        width: 100%;
        height: 100vh;
        
        
        @media (max-width: 450px){
            background: white;
        }

        
    }
`