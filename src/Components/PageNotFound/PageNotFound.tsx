import React from "react"
import { PageNotFoundContainer } from "./PageNotFoundStyles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import img from "../HomePage/images/amico.png"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <PageNotFoundContainer>
               <img src={img} alt="" style={{width: '400px', height : '400px'}}/>
                <div className="error-message">Page Not Found</div>
                <span onClick={() => navigate('/')}>Go Back to Home Page</span>
            </PageNotFoundContainer>
        </motion.div>
    )
}

export default PageNotFound;