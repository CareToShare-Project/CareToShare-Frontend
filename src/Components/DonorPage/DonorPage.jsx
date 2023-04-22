import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function DonorPage(){
    const {username} = useParams()
    return (
        <>
            <h1>Donor Page: {username}</h1>
            <Outlet />
        </>
    )
}

export default DonorPage;