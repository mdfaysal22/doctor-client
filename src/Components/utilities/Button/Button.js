import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn text-white border-0 bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default Button;