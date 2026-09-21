import { useEffect, useState } from 'react'

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState( () => {
        try{
            const saved = localStorage.getItem(key);
            return saved ? JSON.parse(saved) : defaultValue
        } catch {
            console.log('Error loading the storage.')
        }
    });

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(value))
        } catch {
            console.log('Error setting storage.')
        }
    }, [key, value]);
    return [value, setValue]
}