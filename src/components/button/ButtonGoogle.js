import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponents from 'components/common/ErrorComponents';


const ButtonGoogle = ({ text = 'Sign up with google', onClick = () => { } }
) => {
    return (
        <button className='flex items-center justify-center w-full py-3 text-base font-semibold border gap-x-2 border-stone-300 rounded-xl text-text2 dark:text-white dark:border-darkStroke'
            onClick={onClick}
        >
            <img srcSet='/icon-gg1.png' alt='icon-gg1' />
            <span>{text}</span>
        </button>
    );
};

ButtonGoogle.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default withErrorBoundary(ButtonGoogle, {
    FallbackComponent: ErrorComponents
});