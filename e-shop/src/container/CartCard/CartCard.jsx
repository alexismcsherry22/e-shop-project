import React from "react";
import Quantity from "../../components/Quantity";
import styles from "./CartCard.module.scss";
import { useEffect, useState } from "react";

const CartCard = ({ item, onChange, onDelete }) => {
    const [qty, setQty] = useState(1);

    useEffect(() => {
        onChange({
            ...item,
            quantity: qty,
        });
        if (qty <= 0) {
            handleDelete();
        }
    }, [qty]);

    const handleDelete = () => {
        onDelete(item.id1);
    };

    return (
        <div className={styles.Cart}>
            <img className={styles.Cart__Image} src={item.image}></img>
            <h3 className={styles.Cart__Title}>{item.title}</h3>
            <p className={styles.Cart__Para}>${item.price}</p>
            <div>
                <Quantity value={qty} onChange={setQty} />
            </div>
            <button className={styles.Cart__Button} onClick={handleDelete}>
                Remove Item
            </button>
        </div>
    );
};

export default CartCard;
