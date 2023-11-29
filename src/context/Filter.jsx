import { createContext, useState } from "react";

export const FiltersContext = createContext()

// eslint-disable-next-line react/prop-types
export const FiltersProvider = ({children}) => {

    const [filter, setFilter] = useState('Football');

return (
    <FiltersContext.Provider value={{
        filter,
        setFilter
    }}>
        {children}
    </FiltersContext.Provider>
)
}
