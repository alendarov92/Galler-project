import { useState } from "react"


export const useLocalStorage = (key, defaultValue) => {
    
    const [value, setValue] = useState(() => {
        const storeData = localStorage.getItem(key);

        return storeData ? JSON.parse(storeData) : defaultValue;
    });

    const setLocalStorageValue = (newValeu) => {
        localStorage.setItem(key, JSON.stringify(newValeu));

        setValue(newValeu);
    };

    return [
        value,
        setLocalStorageValue,
    ];
};