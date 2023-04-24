import { IconType } from "react-icons";

export interface LoginProps {
    userType: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
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
    username: string,
    features : Feature[]
}