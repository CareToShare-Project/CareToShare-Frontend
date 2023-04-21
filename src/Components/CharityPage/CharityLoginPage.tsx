import React, {useState, useEffect} from 'react'
import Login from '../Shared_util/Login/Login';
import '../Shared_Styles/Styles.css'
import { useNavigate } from 'react-router-dom';


function CharityLoginPage () {
    const [charityName, setCharityName] = useState('');
    const [charityPassword, setCharityPassword] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        if(charityName === 'bosaata'){
            navigate('charityDashboard')
        }
        console.log(charityName, charityPassword)

    }, [charityName, charityPassword, navigate])

    return(
        <div className='body-container'>
            <Login 
                userType='charity'
                setPassword={setCharityPassword}
                setUsername={setCharityName}
            />
        </div>
    )
}

export default CharityLoginPage;