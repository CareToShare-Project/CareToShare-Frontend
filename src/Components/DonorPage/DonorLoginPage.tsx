import React, {useState, useEffect} from 'react'
import Login from '../Shared_util/Login/Login';
import '../Shared_Styles/General/Styles.css'
import { useNavigate} from 'react-router-dom';


function DonorLoginPage () {
    const [donorName, setDonorName] = useState('');
    const [donorPassword, setDonorPassword] = useState('');
    const navigate = useNavigate();
   

    useEffect(()=>{
        if(donorName && donorPassword){
             navigate(`donorDashboard/${donorName}`)
            console.log(donorName, donorPassword)
        }

    }, [donorName, donorPassword, navigate])
    
    return(

        <div className='body-container'>
            <Login 
                setUsername={setDonorName}
                setPassword={setDonorPassword}
                userType='donor'
            />
        </div>
    )
}

export default DonorLoginPage;