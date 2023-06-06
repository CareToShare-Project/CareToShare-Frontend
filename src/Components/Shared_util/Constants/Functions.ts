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
        return "successfully uploaded";
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

export {}
