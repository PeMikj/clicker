import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/clicks')
            .then(response => {
                setClickCount(response.data.click_count);
            });
    }, []);

    const incrementClickCount = () => {
        axios.post('http://localhost:8000/clicks')
            .then(response => {
                setClickCount(response.data.click_count);
            });
    };

    return (
        <div>
            <p>Click Count: {clickCount}</p>
            <button onClick={incrementClickCount}>Increment</button>
        </div>
    );
};

export default ClickCounter;