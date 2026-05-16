import { useEffect, useState } from "react";

useEffect(() => {
    fetchStockPrice()
    const intervalid = setInterval((fetchStockPrice, 1000));
    return () => clearInterval(intervalid) // აქ ჩვენ ვაჩერებთ ინტერვალს როცა კომპონენტი აღარ გამოჩნდება ვებ საიტზე რომ არ გამოვიწვიოთ ქრაშები
}, [])

const [isOnline, setIsOnline] = useState(navigator.onLine);
const updateOnlineStatus = () => setIsOnline(navigator.onLine)

useEffect(() => {
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    return () => { // აქაც იგვეს ვაკეთებთ
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
    }
})