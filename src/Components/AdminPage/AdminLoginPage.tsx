import React, {useEffect, useState} from 'react'
import Login from '../Shared_util/Login/Login'
import '../Shared_Styles/Styles.css'
import { useNavigate } from 'react-router-dom';




function AdminLoginPage () {

    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        if(adminName === 'andy'){
            navigate('adminDashboard')
        }
        console.log(adminName,adminPassword)
        
    }, [adminName, adminPassword, navigate])


    return(
        <div className='body-container'>
            <Login  
                setPassword={setAdminPassword} 
                setUsername={setAdminName}
                userType='admin'
            />
        </div>
    )
}

export default AdminLoginPage;