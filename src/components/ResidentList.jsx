import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
    return (
        <>
            {residents?.length === 0 ? (
                <div className='no-residents'>
                    <h3 className='weightless marginless muted-txt'>404</h3>
                    <div>
                        <h2 className='weightless marginless muted-txt'>Residents not found!</h2>
                        <h2 className='weightless marginless muted-txt'>
                            This location has not residents <i className="fa-solid fa-face-frown"></i>
                        </h2>
                    </div>
                </div>
            ) : (
                <div className='resident-container'>
                    {residents?.map(resident => (
                        <div key={resident}>
                            <ResidentInfo resident={resident} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ResidentList;