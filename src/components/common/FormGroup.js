import React from 'react';

const FormGroup = ({ children }) => {
    return (
        <div className='flex flex-col mb-6 lg:mb-5 gap-x-2 lg:gap-x-3'>
            {children}
        </div>
    );
};

export default FormGroup;