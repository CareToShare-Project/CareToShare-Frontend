import { IconType } from "react-icons";

export interface LoginProps {
    userType: string,
    navigateTo : string,
    fetchFrom : string 
}

export interface UserLoginProps {
    username : string,
    password : string
}

export interface Feature {
    title: string,
    link: string,
    icon: IconType
}

export interface SideBarFeaturesProp {
    features : Feature[]
}

export interface SideBarProps {
    features : Feature[],
}


export interface LoginToastProps {
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    showToast : boolean,
    toastMessage : string
}

export interface AlertProps {
    message: string,
    variant: string
}

export interface PasswordResetProps{
    navigateTo : string
}



export interface RequestCardProp {
    details : {
        requestType : string,
        requestedBy : string,
        description? : string,
        requestId : string,
    }
}

export interface queryProp {
    query : string,
    setQuery : React.Dispatch<React.SetStateAction<string>>,
    setRefresh : React.Dispatch<React.SetStateAction<string>>
}

export interface NavBarProp {
    username : string| undefined,
    userType : string
}

export interface donationProps {
    donationType?: string,
    donationId: string,
    donatedBy?: string,
    donatedTo?: string,
    donationStatus?: string,
    description?: string,
    itemPhoto?: string,
    location?: string,
    createdAt: string,
    updatedAt: string
}

export interface DonationChartProps{
    donations: donationProps[]
}

export interface requestProps {
    requestId: string,
    requestedBy?: string,
    requestType?: string,
    requestTo?: string,
    description?:string,
    requestStatus?:string,
    requestImage?:string,
    createdAt: string,
    updatedAt?: Date
}

export interface RequestChartProps{
    requests : requestProps[]
}

export interface DonationRequestChartProps{
    donations: donationProps[],
    requests : requestProps[]

}

export interface OrganisationProps{
    username: string,
    _id : string,
    email: string,
    isVerified: boolean,
    location: string,
    organisationName: string,
    contact?: string,
    isApproved?: boolean,
    isActive?: boolean,
    role ?: string,
    reviews? : string[],
    businessCertificate: string,
    mission : string,
    createdAt: string,
    updatedAt?: Date
}

export interface organisationCardProp {
    details: OrganisationProps,
    setShow : React.Dispatch<React.SetStateAction<boolean>>,
    setDetails : React.Dispatch<React.SetStateAction<OrganisationProps | undefined>>
}


export interface DonorProps {
    email?: string,
    _id : string,
    username: string,
    firstName?: string,
    lastName?:string,
    location?:string,
    contact?:string,
    reviews?: string[],
    isActive?: boolean,
    role?: string,
    createdAt: string,
    updatedAt?: Date
}

export interface ProfileModalProps{
    show : boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    details: OrganisationProps | undefined
}
