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
    details : requestProps
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
    donationId: string,
    donorEmail: string,
    organisationEmail: string,
    organisationContact?: string,
    campaignId: string,
    donatedBy: string,
    donatedTo?: string,
    donationStatus?: string,
    description: string,
    itemPhoto: string,
    location?: string,
    createdAt: string,
    updatedAt: string,
    contact?: string,
    quantity: number,
    delivered: boolean,
    received: boolean,
    deliveryDate?: Date | undefined,
    deliveryMethod?: string,
    deliveryDetails?: string,
    deliveryMode?: string
}

export interface donationCardProps {
    details : donationProps,
    setShowLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowToast : React.Dispatch<React.SetStateAction<boolean>>
}

export interface DonationChartProps{
    donations: donationProps[]
}

export interface requestProps {
    campaignId: string,
    campaignTitle: string,
    organisationName?: string,
    username?: string,
    email?: string,
    description?:string,
    requestStatus?:string,
    campaignImage:string,
    createdAt: string,
    updatedAt?: Date,
    location?: string,
    organisationContact?: string,
    endDate? : Date | undefined,
    startDate? : Date | undefined,
    target?: number,
}

export interface RequestChartProps{
    requests : requestProps[]
}

export interface DonationRequestChartProps{
    donations: donationProps[],
    requests : requestProps[]

}
export interface reviewsProp {
    user : string,
    review: string
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
    reviews : reviewsProp[],
    businessCertificate: string,
    mission : string,
    createdAt: string,
    updatedAt?: Date,
    photo : string
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

export interface DonatedItemProps {
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    details : donationProps
}
