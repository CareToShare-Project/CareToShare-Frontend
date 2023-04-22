import React from 'react'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function CharityPage(){
    const {username} = useParams();
    return (
        <>
            <h1>Charity Page : {username}</h1>
            <Outlet />
        </>
    )
}

export default CharityPage;