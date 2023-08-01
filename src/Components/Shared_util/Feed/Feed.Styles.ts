import styled from "styled-components"

export const FeedPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    position: relative;
`


export const FeedWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    overflow-x: hidden;

    @media (max-width: 630px){
           width: 98%;
           
        }

    
    
    .feed-card{
        background: ${({theme})=> theme.color.secondary};
        border-radius: 10px;
        box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
        border: 1px solid rgba(86, 192, 200, 0.3);
        height: max-content;
        font-family: Roboto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .likes{
            color: ${({theme})=> theme.color.primary};
            margin: 0px 20px;
            display: flex;
            align-items: center;
            gap: 30px;

            span{
                display: flex;
                align-items: center;
                gap: 5px;
                font-weight: 600;
                cursor: pointer;
                &:hover{
                    color: ${({theme})=> theme.background.primary};
                }

                .liked{
                    color: red;
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
            font-weight: 600;
            opacity: 0.5;
            letter-spacing: 0.3px;
            margin: 0 20px;
        
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
            margin: 20px 20px;
            img{
                width: 200px;
                height: 150px;
                border-radius: 10px;
                box-shadow: 0px 0px 4px 3px rgba(20, 107, 113, 0.1);
            }
        }

        .comment-section{
            height: max-height:
            width: 100%;
            margin: 20px;

            .input-field{
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .view-comments{
                display: flex;
                flex-direction: column;

                div{
                    display: flex;
                    flex-direction: column;
                    margin: 5px 10px;

                    .username{
                       color: ${({theme})=> theme.background.primary};
                       font-size: 14px;
                    }

                    .message{
                        font-size: 13px;

                    }
                }
            }
        }
    }
   

`

export {}