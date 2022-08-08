import React from "react";
import styles from "./Quantity.module.scss";

const Quantity = ({ value, onChange }) => {
    return (
        <div className={styles.Quantity}>
            <button onClick={() => onChange(value + 1)}>Add</button>
            <p>{value}</p>
            <button onClick={() => onChange(value - 1)}>Take</button>
        </div>
    );
};

export default Quantity;
