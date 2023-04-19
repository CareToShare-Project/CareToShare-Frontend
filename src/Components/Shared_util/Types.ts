
export interface LoginProps {
    userType: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
}