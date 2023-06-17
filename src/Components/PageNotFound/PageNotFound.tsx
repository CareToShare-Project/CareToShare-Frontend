import React from "react"
import { PageNotFoundContainer } from "./PageNotFoundStyles";
import { TbError404 } from "react-icons/tb"
import { BiErrorAlt } from "react-icons/bi"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <PageNotFoundContainer>
                <div className="error-code">
                    <BiErrorAlt size={"80px"} />
                    <TbError404 size={"100px"} />
                </div>
                <div className="error-message">Page Not Found</div>
                <span onClick={() => navigate('/')}>Go Back to Home Page</span>
            </PageNotFoundContainer>
        </motion.div>
    )
}

export default PageNotFound;