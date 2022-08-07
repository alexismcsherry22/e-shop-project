import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteCartItem, getCart, updateCart } from "../../services/server";
import styles from "./Cart.module.scss";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const getData = async () => {
        const data = await getCart();
        setCartItems(data);
    };

    const handleUpdate = async (newRecord) => {
        const { id, ...record } = newRecord;
        await updateCart(id, record);
        getData();
    };

    const handleDelete = async (id) => {
        await deleteCartItem(id);
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h2 className={styles.Header}>
                Items in your cart: {cartItems.length}
            </h2>
            {cartItems.map((item) => {
                return (
                    <div className={styles.Cart}>
                        <img
                            className={styles.Cart__Image}
                            src={item.image}
                        ></img>
                        <h3 className={styles.Cart__Title}>{item.title}</h3>
                        <p className={styles.Cart__Para}>${item.price}</p>
                        <button
                            className={styles.Cart__Button}
                            onClick={handleDelete(item.id)}
                        >
                            Remove Item
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
