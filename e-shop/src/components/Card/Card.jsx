import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";

//Used to assign products to a card with an image and a title as a link to a product page
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
