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
import Cart from "./components/Cart";
import ViewCard from "./container/ViewCard";

const App = () => {
    //useState to get and set the database in firestore and make use of those objects
    const [products, setProducts] = useState([]);

    // get the products from the database and set them as the products
    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    // whenever a piece of document data is changed, update the document
    const handleUpdate = async (newRecord) => {
        const { id, ...record } = newRecord;
        await updateProducts(id, record);
        getData();
    };

    // Delete the product based on certain conditions
    const handleDelete = async (id) => {
        await deleteProduct(id);
        getData();
    };

    // when the page loads get the database data
    useEffect(() => {
        getData();
    }, []);

    return (
        <SearchProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/store"
                        element={<Store products={products} />}
                    />
                    {/* map the products array so each product has its own unique page */}
                    {products.map((product, index) => {
                        return (
                            <Route
                                key={index}
                                path={`/store/${product.id}`}
                                element={
                                    <ViewCard
                                        key={index}
                                        product={product}
                                        onUpdate={handleUpdate}
                                        onDelete={handleDelete}
                                    />
                                }
                            />
                        );
                    })}
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </SearchProvider>
    );
};

export default App;
