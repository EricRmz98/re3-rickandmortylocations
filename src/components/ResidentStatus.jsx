import React from 'react';

const ResidentStatus = ({ status }) => {
    if (status === 'Alive') {
        return (
            <>
                <p className='marginless'><small>
                    Alive <i className="fa-solid fa-circle" style={{ color: 'green' }}></i>
                </small></p>
            </>
        )
    } else if (status === 'Dead') {
        return (
            <>
                <p className='marginless'><small>
                    Dead <i className="fa-solid fa-circle" style={{ color: 'red' }}></i>
                </small></p>
            </>
        )
    } else {
        return (
            <>
                <p className='marginless'><small>
                    unknown <i className="fa-solid fa-circle" style={{ color: 'gray' }}></i>
                </small></p>
            </>
        )
    }
};

export default ResidentStatus;