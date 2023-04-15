import React from 'react';
import { LoadingContainer } from './LoadingStyle';
import  Spinner from 'react-bootstrap/Spinner';

function Loading(){
    return (
        <LoadingContainer>
            <Spinner animation='grow' size='sm' className='spinner'/>
            <Spinner animation='grow' size='sm' className='spinner'/>
            <Spinner animation='grow' size='sm' className='spinner'/>
        </LoadingContainer>
    )
}

export default Loading;