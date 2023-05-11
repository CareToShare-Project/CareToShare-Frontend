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
    username: string | undefined,
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

export interface organisationCardProp {
    details: {
        organisationName : string,
        location : string,
        email : string,
        contact : string,
        mission : string
    }
}