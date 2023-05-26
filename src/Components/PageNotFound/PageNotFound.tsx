import React from "react"
import { PageNotFoundContainer } from "./PageNotFoundStyles";
import {TbError404} from "react-icons/tb"
import {BiErrorAlt} from "react-icons/bi"
import { useNavigate } from "react-router-dom";

function PageNotFound(){
    const navigate = useNavigate()
    return(
        <PageNotFoundContainer>
            <div className="error-code">
                <BiErrorAlt size={"80px"}/>
                <TbError404 size={"100px"}/>   
            </div>
            <div className="error-message">Page Not Found</div>
            <span onClick={()=> navigate('/')}>Visit Home Page</span>
        </PageNotFoundContainer>
    )
}

export default PageNotFound;