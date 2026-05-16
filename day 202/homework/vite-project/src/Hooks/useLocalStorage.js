import { useEffect, useState } from "react"


const useLocalStorage = (key, initialValue) => {
    const func = () => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue
    }
    const [state, setState] = useState(func)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}

export default useLocalStorage