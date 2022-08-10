import { createContext, useState } from "react";

export const SearchContext = createContext();

// This script can be used if a search bar is added to the project
const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const data = { search, setSearch };

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    );
};

export default SearchProvider;
