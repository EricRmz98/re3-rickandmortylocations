import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ResidentStatus from './ResidentStatus';

const ResidentInfo = ({ resident }) => {

    const [residentData, setResidentData] = useState({})
    const [statusColor, setStatusColor] = useState('')

    useEffect(() => {
        axios
            .get(resident)
            .then(res => setResidentData(res.data))
    }, [])

    return (
        <div className='resident-card'>
            <div className='img-container'>
                <img src={residentData.image} alt="" />
            </div>

            <div className='resident-card-name'>
                <h3 className='accent-txt marginless weightless'>{residentData.name}</h3>
            </div>

            <hr className='mb-1' />
            <p className='muted-txt marginless mb-1px'>Species</p>
            <p className='marginless mb-1'>{residentData.species}</p>
            <p className='muted-txt marginless mb-1px'>Origin</p>
            <p className='marginless mb-1'>{residentData.origin?.name}</p>
            <p className='muted-txt marginless mb-1px'>Appears in episodes</p>
            <p className='marginless'>{residentData.episode?.length}</p>

            <div className='resident-status'>
                <ResidentStatus status={residentData.status} />
            </div>

        </div>
    );
};

export default ResidentInfo;