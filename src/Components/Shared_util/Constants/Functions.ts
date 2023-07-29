import { storage } from "./FireBase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import { BASE_URL } from "./Base_URL";
import { reviewsProp } from "./Types";
import Sentiment from "sentiment";




// handles file upload 
export const uploadImage = (e: React.ChangeEvent<HTMLInputElement>, setImageUpload: React.Dispatch<any>) => {
    if (e.target.files === null) return
    setImageUpload(e.target.files[0])
}

// handle multiple image uploads
export const uploadMultipleImages = (e: React.ChangeEvent<HTMLInputElement>, setImageUpload: React.Dispatch<any>) => {
    if (e.target.files === null) return
    setImageUpload(e.target.files)
    console.log("success")
}

export const calculateUsageDuration = (dateString : string) => {
    // Convert the given date string to a Date object
    const givenDate = new Date(dateString);
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate.getTime() - givenDate.getTime();
  
    // Convert the time difference to days
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    if(daysDiff >= 28){
        const months = Math.floor(daysDiff/28)
        return `${months} month(s)`;
    }
  
    return `${daysDiff} days`;
  }

  export const calculateDaysLeft = (startDateString: Date | undefined,endDateString : Date | undefined) => {
    // Convert the given date string to a Date object
    if (endDateString=== undefined || startDateString=== undefined) return
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Get the current date
    const currentDate = new Date();

    if(startDate.getTime() > currentDate.getTime()) return "Not Started"
  
    // Calculate the time difference in milliseconds
    const timeDiff =  endDate.getTime() - startDate.getTime();
  
    // Convert the time difference to days
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    return `${daysDiff} days`;
  }

// sentiment analysis function 
export const calculateSentiment = (reviews: reviewsProp[]) => {
    if (reviews.length === 0) {
        return '-'
    }
    const analyzer = new Sentiment();

    // Analyze each review and get the sentiment result
    const sentimentResults = reviews.map((review) => analyzer.analyze(review.review));
    console.log('sentimentResults', sentimentResults)

    // Calculate the average sentiment score
    const totalScore = sentimentResults.reduce((total, result) => total + result.score, 0);
    console.log('totalScore', totalScore)

    const averageSentiment = totalScore / sentimentResults.length;
    console.log('average', averageSentiment)

    // Convert the average sentiment score to a percentage
    const sentimentPercentage = Math.round((averageSentiment + 5) * 10);
    if (sentimentPercentage > 100) {
        //setResult(100)
        return '100%';
    } else if (sentimentPercentage < 0) {
        //setResult(0)
        return '0%';
    } else {
        //setResult(sentimentPercentage)
        return `${sentimentPercentage}%`;
    }
    

}

// uploads file to the firebase storage
export const uploadFileToStorageBucket = (imageUpload: any, setImageUrl: React.Dispatch<React.SetStateAction<string>>, path: string) => {
    if (imageUpload === null) return;
    try {
        const imageRef = ref(storage, `${path}/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url)
            })
        })

    } catch (error) {
        console.log("an error occured")
    }


}

// fetch all available organisations
export const getAllOrganisations = async (setOrganisations: React.Dispatch<any>, accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/organisations`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`

            },
        })

        if (response.status === 401) return navigate('/login')
        const results = await response.json();
        const organisation = results.data
        if (results.status === "success") {
            setOrganisations(organisation)
            sessionStorage.setItem('organisations', JSON.stringify(organisation))
        }
    } catch (error) {
        console.log(error)
    }
}

// deactivate organisation account
export const deactivateOrganisation = async (username: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/organisations/${username}/deactivateOrganisation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.ok) {
            setShowLoading(false)
            setToastMessage("User account is deactivated, Refresh page!")
            setShowToast(true)
        }
        else {
            setShowLoading(false)
            setToastMessage("An error occured, try again later")
            setShowToast(true)
        }
    } catch (err) {
        console.log(err)
    }
}

// activate organisation account
export const activateOrganisation = async (username: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/organisations/${username}/activateOrganisation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })
        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.ok) {
            setShowLoading(false)
            setToastMessage("User account is activated, Refresh page!")
            setShowToast(true)

        } else {
            setShowLoading(false)
            setToastMessage("An error occured, try again later")
            setShowToast(true)
        }
    } catch (err) {
        console.log(err)
    }
}

// approve organisation registration 
export const approveOrganisationRegistration = async (username: string,
    setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/organisations/${username}/approve-registration`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate('/login')

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again later")
            setShowToast(true)
        }
        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Registration has been approved successfully, Refresh page!")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
    }
}

// verify organisation
export const verifyOrganisation = async (username: string,
    setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/organisations/${username}/mark-as-verified`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate('/login')

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again later")
            setShowToast(true)
        }
        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Organisation has been verified successfully, Refresh page!")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
    }
}



// fetches all donors
export const getAllDonors = async (setDonors: React.Dispatch<any>, accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/donors`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate("/login")

        const results = await response.json();
        const donors = results.data.donors
        if (results.status === "success") {
            setDonors(donors)
            sessionStorage.setItem('donors', JSON.stringify(donors))
        }
    } catch (error) {
        console.log(error)
    }
}

// deactivate donor account
export const deactivateDonor = async (username: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donors/${username}/deactivateDonor`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.ok) {
            setShowLoading(false)
            setToastMessage("User account is deactivated")
            setShowToast(true)
        } else {
            setShowLoading(false)
            setToastMessage("An error occured, try again later")
            setShowToast(true)
        }


    } catch (err) {
        console.log(err)
    }
}


// activate donor account
export const activateDonor = async (username: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donors/${username}/activateDonor`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.ok) {
            setShowLoading(false)
            setToastMessage("User account is activated")
            setShowToast(true)
        } else {
            setShowLoading(false)
            setToastMessage("An error occured, try again later")
            setShowToast(true)
        }

    } catch (err) {
        console.log(err)
    }
}

// gets all donations from a user
export const getUserDonations = async (setDonations: React.Dispatch<any>,
    donor: string,
    accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/donations`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate('/login')
        if (response.status === 400) return console.log('bad request')
        if (response.status === 500) return

        const results = await response.json();
        const donation = results.data

        if (results.status === "success") {
            const userDonation = donation.filter((item: { donatedBy: string; }) => item.donatedBy === donor)
            setDonations(userDonation)
            sessionStorage.setItem('userDonations', JSON.stringify(donation))
        }
    } catch (error) {
        console.log(error)
    }
}

// gets all donations made to an organisation
export const getOrganisationDonations = async (setDonations: React.Dispatch<any>,
    donatedTo: string,
    accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/donations`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate('/login')
        if (response.status === 400) return console.log('bad request')
        if (response.status === 500) return

        const results = await response.json();
        const donation = results.data

        if (results.status === "success") {
            const userDonation = donation.filter((item: { donatedTo: string; }) => item.donatedTo === donatedTo)
            setDonations(userDonation)
            sessionStorage.setItem('userDonations', JSON.stringify(donation))
        }
    } catch (error) {
        console.log(error)
    }
}

// gets all donations from a user
export const getAllDonations = async (setDonations: React.Dispatch<any>, accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/donations`, {
            method: 'GET',
            headers: {
                'content-type': 'application{/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 500) return
        const results = await response.json();
        const donation = results.data
        if (results.status === "success") {
            setDonations(donation)
            sessionStorage.setItem('donations', JSON.stringify(donation))
        }
    } catch (error) {
        console.log(error)
    }
}

// approve donation by admin
export const approveDonation = async (
    donationId: string,
    setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donations/${donationId}/approveDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            }
        })



        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action!")
            setShowToast(true)
            return
        }

        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Donation approved Successfully, Refresh page!")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
    }
}

// fetches all requests from the backend
export const getAllRequests = async (setCampaigns: React.Dispatch<any>,
    accessToken: string,
    navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/requests`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate("/login")

        const results = await response.json();
        const campaignData = results.data;
        if (results.status === "success") {
            setCampaigns(campaignData)
            sessionStorage.setItem('campaigns', JSON.stringify(campaignData))
        }
    }
    catch (error) {
        console.log(error)
    }
}

// fetches all requests and display to admin for approval
export const fetchRequests = async (setRequests: React.Dispatch<any>, accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/requests`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate('/login')
        const results = await response.json();
        const requests = results.data
        if (results.status === "success") {
            setRequests(requests)
            sessionStorage.setItem('requests', JSON.stringify(requests))
        }
    }
    catch (error) {
        console.log(error)
    }
}

// fetches all organisationRequests
export const organisationRequest = async (setRequests: React.Dispatch<any>, requestedBy: string, accessToken: string, navigate: any) => {
    try {
        const response = await fetch(`${BASE_URL}/requests/${requestedBy}/organisationRequests`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
        })

        if (response.status === 401) return navigate('/login')
        const results = await response.json();
        const requests = results.data
        if (results.status === "success") {
            setRequests(requests)
            sessionStorage.setItem('Orgrequests', JSON.stringify(requests))
        }
    }
    catch (error) {
        console.log(error)
    }
}

// approve requests from organisations
export const approveRequest = async (requestId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/requests/${requestId}/approveRequest`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },

        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Request approved Successfully, Refresh page!")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
    }
}

// accept request from organisations
export const acceptRequest = async (requestId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
    organisation: string
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/requests/${requestId}/acceptRequest`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },


        })

        const responseDonation = await fetch(`${BASE_URL}/donations/${requestId}/updateDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                donatedTo: organisation
            })

        })
        console.log(responseDonation)


        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Request accepted Successfully, Refresh page!")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
    }
}

// close campaign function
export const closeCampaign = async (requestId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/requests/${requestId}/acceptRequest`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },


        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        console.log(results)
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Successfully closed campaign")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
        setShowLoading(false)
    }
}

// accept donations
export const acceptDonation = async (donationId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donations/${donationId}/acceptDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },

        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 400){
            setShowLoading(false)
            setToastMessage("An error occured")
            setShowToast(true)
            return
        }

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        console.log(results)
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Donation accepted Successfully")
            setShowToast(true)
        }
    } catch (error) {
        setShowLoading(false)
    }
}

// reject donations
export const rejectDonation = async (donationId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donations/${donationId}/rejectDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },

        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Donation rejected successfully")
            setShowToast(true)
        }
    } catch (error) {
        console.log(error)
        setShowLoading(false)
    }
}

// deliver donations
export const deliverDonation = async (donationId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
    updatedField : any
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donations/${donationId}/deliverDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(updatedField)

        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Donation delivered successfully")
            setShowToast(true)
        }
    } catch (error) {
        setShowLoading(false)
    }
}

//receive donation
export const receiveDonation = async (donationId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donations/${donationId}/receiveDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },

        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Donation received successfully")
            setShowToast(true)
        }
    } catch (error) {
        setShowLoading(false)
    }
}


// update donation
export const updateDonation = async (donationId: string, setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    accessToken: string,
    navigate: any,
    updatedField: any
) => {
    setShowLoading(true)
    try {
        const response = await fetch(`${BASE_URL}/donations/${donationId}/updateDonation`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(updatedField)

        })

        if (response.status === 401) return navigate("/login")

        if (response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }
        if (response.status === 500) {
            setShowLoading(false)
            setToastMessage("An error occured, try again")
            setShowToast(true)
        }

        const results = await response.json();
        if (results.status === "success") {
            setShowLoading(false)
            setToastMessage("Donation updated successfully")
            setShowToast(true)
        }
    } catch (error) {
        setShowLoading(false)
    }
}





export { }
