import React from 'react';
import PropTypes from 'prop-types'

const Label = (props) => {
    const { children, htmlFor = '', className = '' } = props;
    return (
        <label
            htmlFor={htmlFor}
            className={`text-sm font-medium text-text2 cursor-pointer inline-block mb-3 dark:text-text3 ${className}`}>
            {children}
        </label>
    );
};
Label.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string,
    className: PropTypes.string,

}
export default Label;