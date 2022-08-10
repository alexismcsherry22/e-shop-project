import { useEffect } from "react";
import { useState } from "react";
import { addToCart, getProducts } from "../../services/server";
import styles from "./ViewCard.module.scss";

const ViewCard = ({ product, onDelete, onUpdate }) => {
    const [products, setProducts] = useState(null);
    const [stock, setStock] = useState(product.rating.count);
    const [favourite, setFavourite] = useState(product.favourited);

    //changes the stock value when a product is added to the cart
    const handleStock = () => {
        if (stock <= 0) {
            setStock("Out of Stock");
            // or preferably say "out of stock"
        } else {
            setStock(stock - 1);
        }
    };

    //Used on a favourited button to change states of a product as favourited or not
    const handleFavourite = () => {
        setFavourite(!favourite);
    };

    //Update the product in the database when either the stock or favourite values change
    useEffect(() => {
        onUpdate({
            ...product,
            count: stock,
            favourited: favourite,
        });
    }, [stock, favourite]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    //Used on the add to cart button to update the cart database or
    //if the item is out of stock alert the user that the product is out of stock
    const handleAddToCart = async () => {
        if (stock === "Out of Stock") {
            return alert("Product is out of stock");
        } else {
            await addToCart(product);
            handleStock();
            getData();
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {product && (
                <div className={styles.ViewCard}>
                    <img
                        className={styles.ViewCard__Image}
                        src={product.image}
                    ></img>
                    <h3 className={styles.ViewCard__Title}>{product.title}</h3>
                    <p className={styles.ViewCard__Para}>
                        Favourited:{" "}
                        <button
                            onClick={handleFavourite}
                            className={
                                favourite
                                    ? styles.ViewCard__favourited_true
                                    : styles.ViewCard__favourited_false
                            }
                        >{`${favourite}`}</button>
                    </p>

                    <p className={styles.ViewCard__Para}>
                        Category: {product.category}
                    </p>
                    <p className={styles.ViewCard__Para}>
                        Price: ${product.price} Rating: {product.rating.rate}{" "}
                        Stock: {product.rating.count}
                    </p>
                    <p className={styles.ViewCard__Para}>
                        {product.description}
                    </p>
                    <button
                        className={styles.ViewCard__Button}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </>
    );
};

export default ViewCard;
