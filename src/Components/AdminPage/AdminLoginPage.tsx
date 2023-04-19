import React, {useEffect, useState} from 'react'
import Login from '../Shared_util/Login/Login'




function AdminLoginPage () {

    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    useEffect(()=>{
        if(adminName==='andy') {
            console.log(adminName,adminPassword)
        }
      

    }, [adminName, adminPassword])


    return(
        <>
            <Login  
                setPassword={setAdminPassword} 
                setUsername={setAdminName}
                userType='admin'
            />
        </>
    )
}

export default AdminLoginPage;