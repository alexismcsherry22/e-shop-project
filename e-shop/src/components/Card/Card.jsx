import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Card = ({ product }) => {
    return (
        <div className={styles.Card}>
            <img className={styles.Card__Image} src={product.image}></img>
            <NavLink className={styles.Card__Title} to={`${product.id}`}>
                {product.title}
            </NavLink>
        </div>
    );
};

export default Card;
