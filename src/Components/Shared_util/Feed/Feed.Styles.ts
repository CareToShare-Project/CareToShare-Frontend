import styled from "styled-components"

export const FeedPageContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    position: relative;
`

export const RightNavBar = styled.div`
    width: 20%;
    height: 300px;
    background: ${({theme})=> theme.color.hover}; 
    border: 2px solid white;
    border-radius: 20px;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.4);
    position: sticky;
    top: 0px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ul{
        font-size: 16px;
        letter-spacing: 1.3px;
        color: ${({theme})=> theme.color.primary};
        display: flex;
        flex-direction: column;
        font-family: Roboto;
        gap: 5px;

        li{
            
            cursor: pointer;

            &:hover{
                color: ${({theme})=> theme.background.primary};
            }
        }
    }
    

    
`
export const FeedWrapper = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;

    
    
    .feed-card{
        background: ${({theme})=> theme.color.hover};
        border: 2px solid white;
        box-shadow: 0px 0px 3px rgba(0,0,0,0.4);
        height: max-content;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .likes{
            color: ${({theme})=> theme.color.primary};
            padding-top: 20px;
            padding-left: 20px;
            display: flex;
            align-items: center;
            gap: 20px;

            span{
                display: flex;
                align-items: center;
                cursor: pointer;
                &:hover{
                    color: ${({theme})=> theme.background.primary};
                }
                span{
                    font-size: 16px;
                    font-family: cursive;
                }
            }
        }

        p{
            color: ${({theme})=> theme.color.primary};
            font-size: 15px;
            font-family: Roboto;
            font-weight: 700;
        }

        .header{
            display: flex;
            align-items: center;
            gap: 15px;

            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
    
            .org{
                color: ${({theme})=> theme.background.primary};
                font-weight: 800;
                font-family: Poppins;
                }
            .post{
                font-size: 14px;
                color: rgba(0,0,0,0.5);
            }

            .time{
                font-size: 14px;
                font-weight: 600;
                color: rgba(0,0,0.5);
            }
        }

        .footer{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            img{
                width: 200px;
                height: 150px;
                border-radius: 10px;
                box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
            }
        }
    }
   

`

export {}