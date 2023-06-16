import { storage } from "./FireBase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"
import { BASE_URL } from "./Base_URL";




// handles file upload 
export const uploadImage = (e: React.ChangeEvent<HTMLInputElement>, setImageUpload: React.Dispatch<any>) => {
    if (e.target.files === null) return
    setImageUpload(e.target.files[0])
    console.log("success")
}

// handle multiple image uploads
export const uploadMultipleImages = (e: React.ChangeEvent<HTMLInputElement>, setImageUpload: React.Dispatch<any>) => {
    if (e.target.files === null) return
    setImageUpload(e.target.files)
    console.log("success")
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

// deactivate donor account
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

        if(response.status === 403) {
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

        if(response.status === 403) {
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

        if(response.status === 403) {
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

        if(response.status === 403) {
            setShowLoading(false)
            setToastMessage("You do not have permission to perform this action")
            setShowToast(true)
            return
        }

        if (response.ok) {
            setShowLoading(false)
            setToastMessage("User account is deactivated, Refresh page!")
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

        if(response.status === 403) {
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

        if(response.status===403) {
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
    setSpecificRequest: React.Dispatch<any>,
    username: string | null | undefined,
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
        const campaignData = results.data.filter((item: { requestType: string; }) => item.requestType === "Campaign");
        const specificRequestData = results.data.filter((item: { requestTo: string; }) => item.requestTo === username);
        if (results.status === "success") {
            setCampaigns(campaignData)
            setSpecificRequest(specificRequestData)
            sessionStorage.setItem('requests', JSON.stringify(results.data))
            sessionStorage.setItem('campaigns', JSON.stringify(campaignData))
            sessionStorage.setItem('specificRequests', JSON.stringify(specificRequestData))
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

        if(response.status === 403) {
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


export { }
