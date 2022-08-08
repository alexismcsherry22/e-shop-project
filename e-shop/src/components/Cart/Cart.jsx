import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteCartItem, getCart, updateCart } from "../../services/server";
import styles from "./Cart.module.scss";
import Quantity from "../Quantity";
import CartCard from "../../container/CartCard/CartCard";

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
                    <CartCard
                        key={item.id}
                        item={item}
                        onChange={handleUpdate}
                        onDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};

export default Cart;
