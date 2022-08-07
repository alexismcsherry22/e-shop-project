import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Card = ({ product }) => {
    // const [context, setContext] = useContext(ProductContext);

    // const handleClick = () => {
    //     setContext(product);
    // };

    return (
        <div className={styles.Card}>
            <img className={styles.Card__Image} src={product.image}></img>
            <NavLink
                className={styles.Card__Title}
                to={`${product.id}`}
                //onClick={handleClick}
            >
                {product.title}
            </NavLink>
        </div>
    );
};

export default Card;
