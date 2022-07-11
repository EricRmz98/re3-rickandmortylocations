import React, { useState } from 'react';

const useDoPagination = ({residents}) => {

    const [test, setTest] = useState([])

    setTest(residents)
    
    console.log(test)
};

export default useDoPagination;