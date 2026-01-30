import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button onClick={handleBack} className="back-button" aria-label="Go back">
            <i className="fas fa-arrow-left"></i>
        </button>
    );
};

export default BackButton;
