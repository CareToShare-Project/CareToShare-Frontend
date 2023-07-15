import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ApproveButton as AnalyzeButton, ApproveDonationContainer } from "./Admin.Styles"
import { TableWrapper } from "../DonorPage/DonorStyles"
import SearchBar from "../Shared_util/SearchBar/SearchBar"
import { Modal, Spinner, Table } from "react-bootstrap"
import { getAllOrganisations, verifyOrganisation } from "../Shared_util/Constants/Functions"
import { OrganisationProps } from "../Shared_util/Constants/Types"
import LoginToast from "../Shared_util/Toast/LoginToast"
import Sentiment from "sentiment"
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa"






const Verification = () => {
    const [organisations, setOrganisation] = useState<OrganisationProps[]>([])
    const [refresh, setRefresh] = useState("")
    const [query, setQuery] = useState("")
    const [showLoading, setShowLoading] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [show, setShow] = useState(false)
    const [result, setResult] = useState(0)

    const navigate = useNavigate()
    const tokenData = sessionStorage.getItem('accesstoken')
    const accessToken = tokenData && JSON.parse(tokenData)

    // sentiment analysis function 
    const calculateSentiment = (reviews: string[]) => {
        setShowLoading(true)
        if (reviews.length === 0) {
            setShowLoading(false)
            setToastMessage("There are no reviews to analyze")
            setShowToast(true)
            return
        }

        const analyzer = new Sentiment();

        // Analyze each review and get the sentiment result
        const sentimentResults = reviews.map((review) => analyzer.analyze(review));
        console.log('sentimentResults', sentimentResults)

        // Calculate the average sentiment score
        const totalScore = sentimentResults.reduce((total, result) => total + result.score, 0);
        console.log('totalScore', totalScore)

        const averageSentiment = totalScore / sentimentResults.length;
        console.log('average', averageSentiment)

        // Convert the average sentiment score to a percentage
        const sentimentPercentage = Math.round((averageSentiment + 5) * 10);
        if (sentimentPercentage > 100) {
            setResult(100)
        } else if (sentimentPercentage < 0) {
            setResult(0)
        } else {
            setResult(sentimentPercentage)
        }


        setTimeout(() => {
            setShow(true)
            setShowLoading(false)
        }, 1500)

    }

    useEffect(() => {
        getAllOrganisations(setOrganisation, accessToken, navigate)
    }, [refresh, accessToken, navigate])


    return (
        <ApproveDonationContainer>
            <SearchBar query={query} setQuery={setQuery} setRefresh={setRefresh} />
            <TableWrapper>
                <Table responsive className='table' striped hover bordered >
                    <thead className='table-heading'>
                        <tr>
                            <th>Name of Organisation</th>
                            <th>Location</th>
                            {/* <th>Contact</th>
                            <th>Email</th> */}
                            <th>Created At</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {organisations.filter(item => item.email.toLowerCase().includes(query.toLowerCase()) ||
                            item.organisationName.toLowerCase().includes(query.toLowerCase()) ||
                            item.location.toLowerCase().includes(query.toLowerCase())).map((org: OrganisationProps) => {
                                return (
                                    <tr key={org.username}>
                                        <td>{org.organisationName}</td>
                                        <td>{org.location}</td>
                                        {/* <td>{org.contact}</td>
                                        <td>{org.email}</td> */}
                                        <td>{org.createdAt.slice(0, 10)}</td>
                                        <td>
                                            <AnalyzeButton style={{ padding: "5px" }} onClick={() => calculateSentiment(org.reviews)}>
                                                Analyze
                                            </AnalyzeButton>
                                        </td>
                                        <td>
                                            {org.isVerified ? 'verified' : <AnalyzeButton 
                                                style={{ padding: "5px" }} 
                                                onClick={() => verifyOrganisation(org.username, setShowLoading, setToastMessage, setShowToast, accessToken, navigate)}>
                                                Verify
                                            </AnalyzeButton>
                                            }
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <LoginToast
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                />
            </TableWrapper>
            {showLoading && <Spinner animation='border' className='spinner' style={{ color: "black" }} />}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body
                    style={{
                        height: "200px", display: "flex", width: "100%", fontFamily: "Poppins", fontWeight: "700",
                        alignItems: "center", justifyContent: "center", flexDirection: "column", letterSpacing: '1.2px', gap: "20px"
                    }}>
                    <div style={{ color: "#56C0C8" }}>
                        Results from Analysis:
                    </div>
                    {result >= 75 ?
                        <div style={{ fontFamily: "Poppins", color: "#56C0C8", display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                            <h1 style={{ fontSize: "70px" }}>
                                {result}%
                            </h1>
                            <div><FaThumbsUp /></div>
                        </div> :
                        <div style={{ fontFamily: "Poppins", color: "red", display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                            <h1 style={{ fontSize: "70px" }}>
                                {result}%
                            </h1>
                            <div><FaThumbsDown /></div>
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </ApproveDonationContainer>
    )
}


export default Verification