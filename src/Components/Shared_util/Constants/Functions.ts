import { storage } from "./FireBase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

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

export {}
