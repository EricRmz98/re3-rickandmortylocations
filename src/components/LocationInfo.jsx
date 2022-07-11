import React from 'react';

const LocationInfo = ({ location }) => {
    return (
        <div className='location-info'>
            <div>
                <h3 className='marginless weightless accent-txt'>Name:</h3>
                <h4 className='mt-1 weightless'>{location.name}</h4>
            </div>
            <div>
                <h3 className='marginless weightless accent-txt'>Type:</h3>
                {location.type === "" ? (
                    <h4 className='mt-1 weightless'>unknown</h4>
                ) : (
                    <h4 className='mt-1 weightless'>{location.type}</h4>
                )}
            </div>
            <div>
                <h3 className='marginless weightless accent-txt'>Dimension:</h3>
                {location.dimension === "" ? (
                    <h4 className='mt-1 weightless'>unknown</h4>
                ) : (
                    <h4 className='mt-1 weightless'>{location.dimension}</h4>
                )}
            </div>
            <div>
                <h3 className='marginless weightless accent-txt'>Residents:</h3>
                <h4 className='mt-1 weightless'>{location.residents?.length}</h4>
            </div>
        </div>
    );
};

export default LocationInfo;