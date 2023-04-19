import React, {useState, useEffect} from 'react'
import Login from '../Shared_util/Login/Login';


function CharityLoginPage () {
    const [charityName, setCharityName] = useState('');
    const [charityPassword, setCharityPassword] = useState('')

    useEffect(()=>{
        console.log('charity login page')
    }, [charityName, charityPassword])

    return(
        <>
            <Login 
                userType='charity'
                setPassword={setCharityPassword}
                setUsername={setCharityName}
            />
        </>
    )
}

export default CharityLoginPage;