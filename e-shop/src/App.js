import SearchProvider from "./context/SearchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    getProducts,
    seedProducts,
    updateProducts,
    deleteProduct,
    createProduct,
} from "./services/server";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Store from "./components/Store";

const App = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleChange = async (newRecord) => {
        const { id, ...record } = newRecord;
        await updateProducts(id, record);
        getData();
    };

    //Need logic to remove the item when the stock is gone
    const handleDelete = async (id) => {
        await deleteProduct(id);
        getData();
    };
    return (
        <SearchProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </BrowserRouter>
        </SearchProvider>
    );
};

export default App;
