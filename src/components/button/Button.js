import React from 'react';
import { Link } from 'react-router-dom'

const Button = () => {
    return (
        <div>
            <Link to='/login'>
                Go to Login Page
            </Link>
        </div>
    )
}

export default Button;
