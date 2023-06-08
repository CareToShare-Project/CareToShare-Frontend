import { storage } from "./FireBase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"
import { BASE_URL } from "./Base_URL";

// handles file upload 
export const uploadImage = (e : React.ChangeEvent<HTMLInputElement>, setImageUpload : React.Dispatch<any>) => {
    if(e.target.files === null) return
    setImageUpload(e.target.files[0] )
    console.log("success")
}

// uploads file to the firebase storage
export const uploadFileToStorageBucket = (imageUpload : any, setImageUrl : React.Dispatch<React.SetStateAction<string>>, path : string) => {
    if(imageUpload === null) return;
    try{
        const imageRef = ref(storage, `${path}/${imageUpload.name + v4() }`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=> {
                setImageUrl(url)
            })
        })
        
    }catch(error){
        console.log("an error occured")
    }


}

 // fetch all available organisations
 export const getAllOrganisations = async(setOrganisations : React.Dispatch<any>) => {
    try{
        const response = await fetch(`${BASE_URL}/organisations`,{
            method : 'GET',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
        const organisation = results.data
            if(results.status === "success"){
                setOrganisations(organisation)
                sessionStorage.setItem('organisations', JSON.stringify(organisation))
            }
        }catch(error){
        console.log(error)
    }
}

// approve organisation registration 
export const approveOrganisationRegistration = async(username : string, 
                                                    setShowLoading : React.Dispatch<React.SetStateAction<boolean>>,
                                                    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
                                                    setShowToast : React.Dispatch<React.SetStateAction<boolean>>) => 
{
    setShowLoading(true)
    try{
        const response = await fetch(`${BASE_URL}/organisations/${username}/approve-registration`,{
            method : 'PATCH',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
            if(results.status === "success"){
                setShowLoading(false)
                setToastMessage("Registration has been approved successfully, Refresh page!")
                setShowToast(true)
            }
        }catch(error){
        console.log(error)
    }
}


// gets all donations from a user
export const getUserDonations = async(setDonations : React.Dispatch<any>, donor : string | null |undefined) => {
    try{
        const response = await fetch(`${BASE_URL}/donations/${donor}/UserDonation`,{
            method : 'GET',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
        const donation = results.data
        
        if(results.status === "success"){
            setDonations(donation)
            sessionStorage.setItem('userDonations', JSON.stringify(donation))
        }
        }catch(error){
            console.log(error)
        }
}

// gets all donations from a user
export const getAllDonations = async(setDonations : React.Dispatch<any>) => {
    try{
        const response = await fetch(`${BASE_URL}/donations`,{
            method : 'GET',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
        const donation = results.data
        if(results.status === "success"){
            setDonations(donation)
            sessionStorage.setItem('donations', JSON.stringify(donation))
        }
        }catch(error){
            console.log(error)
        }
}

// approve donation by admin
export const approveDonation = async(status : string, 
                                    donationId : string , 
                                    setShowLoading : React.Dispatch<React.SetStateAction<boolean>>,
                                    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
                                    setShowToast : React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowLoading(true)
    try{
        const response = await fetch(`${BASE_URL}/donations/${donationId}/updateStatus`,{
            method : 'PATCH',
            headers : {'content-type':'application/json'},
            body : JSON.stringify({
                donationStatus : status
            })
        })

        const results = await response.json();
        if(results.status === "success"){
            setShowLoading(false)
            setToastMessage("Donation approved Successfully, Refresh page!")
            setShowToast(true)
        }}catch(error){
            console.log(error)
        }
}

// fetches all requests from the backend
export const getAllRequests =  async (setCampaigns: React.Dispatch<any>, setSpecificRequest : React.Dispatch<any>, username : string | null |undefined ) => {
    try{
        const response = await fetch(`${BASE_URL}/requests`,{
            method : 'GET',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
        const campaignData = results.data.filter((item: { requestType: string; })=> item.requestType === "Campaign");
        const specificRequestData = results.data.filter((item: { requestTo: string; })=> item.requestTo === username);
            if(results.status === "success"){
                setCampaigns(campaignData)
                setSpecificRequest(specificRequestData)
                sessionStorage.setItem('campaigns', JSON.stringify(campaignData))
                sessionStorage.setItem('specificRequests', JSON.stringify(specificRequestData))
            }
    }
      catch(error){
        console.log(error)
        }
}

// fetches all requests and display to admin for approval
export const fetchRequests =  async (setRequests: React.Dispatch<any> ) => {
    try{
        const response = await fetch(`${BASE_URL}/requests`,{
            method : 'GET',
            headers : {'content-type':'application/json'},
        })

        const results = await response.json();
        const requests = results.data
        if(results.status === "success"){
            setRequests(requests)
            sessionStorage.setItem('requests', JSON.stringify(requests))
         }
    }
      catch(error){
        console.log(error)
        }
}

// approve requests from organisations
export const approveRequest = async(status : string, requestId : string , setShowLoading : React.Dispatch<React.SetStateAction<boolean>>,
                                    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
                                    setShowToast : React.Dispatch<React.SetStateAction<boolean>>
                                    ) => {
        setShowLoading(true)
        try{
            const response = await fetch(`${BASE_URL}/requests/${requestId}/updateStatus`,{
                method : 'PATCH',
                headers : {'content-type':'application/json'},
                body : JSON.stringify({
                donationStatus : status
            })
            })

            const results = await response.json();
            if(results.status === "success"){
                setShowLoading(false)
                setToastMessage("Request approved Successfully, Refresh page!")
                setShowToast(true)
    }}catch(error){
        console.log(error)
    }
    }


export {}
