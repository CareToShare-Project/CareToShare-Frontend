import React, {useEffect} from 'react'
import Login from '../Shared_util/Login/Login'



function AdminLoginPage () {

    const [username, setUsername] = React.useState('');
    const [password, setUserPassword] = React.useState('');
    const userType = 'Admin'

    useEffect(()=>{
       console.log(password,username)
    }, [password, username])


    return(
        <>
            <Login  
                setPassword={setUsername} 
                setUsername={setUserPassword}
                user = {userType}
            />
        </>
    )
}

export default AdminLoginPage;