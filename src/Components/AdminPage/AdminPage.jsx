import React from 'react'
import {useParams} from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function AdminPage(){
    const {username} = useParams()
    return (
        <>
            <h1>Admin Page : {username}</h1>
            <Outlet />
        </>
    )
}

export default AdminPage;