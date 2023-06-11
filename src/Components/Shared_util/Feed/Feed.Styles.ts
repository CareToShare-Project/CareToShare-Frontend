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
        font-size: 14px;
        letter-spacing: 1.3px;
        color: ${({theme})=> theme.color.primary};
        display: flex;
        flex-direction: column;
        font-family: Poppins;
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
                    font-size: 14px;
                    font-family: Roboto;
                }
            }
        }

        p{
            color: black;
            font-size: 14px;
            font-family: Roboto;
            font-weight: 550;
            padding: 5px;
        
        }

        .header{
            display: flex;
            align-items: center;
            gap: 15px;
            width: 100%;    

            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
    
            .org{
                display:flex;
                flex-direction: column;
                width: 100%;
                
                .head{
                    color: ${({theme})=> theme.background.primary};
                    font-weight: 800;
                    font-family: Noto Sans, sans-sarif;
                    font-size: 16px;
                }
                span{
                    font-size: 13px;
                    color: ${({theme})=> theme.color.primary};;
                }
            }
            
            .time{
                font-size: 14px;
                color: rgba(0,0,0,0.5);
                width: 40%;
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