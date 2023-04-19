import React, {useState, useEffect} from 'react'
import Login from '../Shared_util/Login/Login';


function DonorLoginPage () {
    const [donorName, setDonorName] = useState('');
    const [donorPassword, setDonorPassword] = useState('');

    useEffect(()=>{
        console.log('donor login page')
    }, [donorName, donorPassword])
    return(
        <>
            <Login 
                setUsername={setDonorName}
                setPassword={setDonorPassword}
                userType='donor'
            />
        </>
    )
}

export default DonorLoginPage;