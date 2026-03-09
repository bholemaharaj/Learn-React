import { useState } from 'react';
import { MenuItem } from "./MenuItem";

export const Menu = () => {
    const [message, setMessage] = useState('');
    const menuItems = [
        { name: "Pizza", price: 9.99 },
        { name: "Burger", price: 7.99 },
        { name: "Pasta", price: 8.99 },
    ];

    const handleOrder = (name, price) => {
        setMessage(`You ordered a ${name} for $${price.toFixed(2)}!`);
    };

    return (
        <div>
            <h1>Our Menu</h1>
            <div className={`message-display ${message ? 'show' : ''}`}>
                {message}
            </div>
            {menuItems.map((item, index) => (
                <MenuItem key={index} name={item.name} price={item.price} onOrder={handleOrder} />
            ))}
        </div>
    );
};