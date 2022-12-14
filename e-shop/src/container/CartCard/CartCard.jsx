import React from "react";
import Quantity from "../../components/Quantity";
import styles from "./CartCard.module.scss";
import { useEffect, useState } from "react";

const CartCard = ({ item, onChange, onDelete }) => {
    const [qty, setQty] = useState(1);

    //when the quantity is changed, update the cart item in the database
    useEffect(() => {
        onChange({
            ...item,
            count: qty,
        });
        if (qty <= 0) {
            handleDelete();
        }
    }, [qty]);

    //Delete with id1 because when pushed from products database to the cart database
    //id1 is the document id and the normal id is the field id
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
