import React, { useEffect, useState } from 'react'

const Task4 = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div>
            <p>{isOnline ? "online" : "offline"}</p>
        </div>
    );
}

export default Task4
