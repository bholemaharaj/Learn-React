import { useState } from 'react';
import './styles.css';

export const CustomButton = () => {
    const [message, setMessage] = useState('');

    const handleClick = (e) => {
        const newMessage = `Button was clicked! (Event: ${e.type}, X and Y: ${e.clientX}, ${e.clientY})`;
        setMessage(newMessage);

        // Clear message after 5 seconds
        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    return (
        <div className="custom-button-container">
            <label className="custom-label" htmlFor="myButton">
                Click the button:
            </label>
            <button
                id="myButton"
                className="custom-button"
                onClick={handleClick}
            >
                Click me!
            </button>
            <div className={`message-display ${message ? 'show' : ''}`}>
                {message}
            </div>
        </div>
    );
};

