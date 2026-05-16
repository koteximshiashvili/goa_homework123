import React, { useState, useEffect } from 'react'

export const useDebounce = (state, delay) => {
    const [deBouncedState, setDeBouncedState] = useState(state);
    useEffect(() => {
        const time = setTimeout(() => {
            setDeBouncedState(state);
        }, delay);
        return () => clearTimeout(time);
    }, [state, delay]);
    return deBouncedState
}

export default useDebounce