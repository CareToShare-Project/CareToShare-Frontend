import styled from 'styled-components'

export const LoadingContainer = styled.div`
    align-items: center;
    position: fixed;
    right: 18%;
    bottom: 0;
    .spinner{
        color: ${({theme})=> theme.background.secondary};
        margin-left: 3px;
    }
`