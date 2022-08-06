import { useEffect } from "react";
import { useState } from "react";
import styles from "./Card.module.scss";
import { NavLink } from 'react-router-dom';


const Card = ({ product, onUpdate, onDelete }) => {
  const [stock, setStock] = useState(product.rating.count);

  const handleStock = () => {
    if (stock <= 0) {
      onDelete(product.id);
      // or preferably say "out of stock"
    } else {
      setStock(stock - 1);
    }
  }

  useEffect(() => {
    onUpdate({
      ...product,
      count: stock,
    });
  }, [stock])

  return (
    <div className={styles.Card}>
      <img className={styles.Card__Image} src={product.image}></img>
      <NavLink className={styles.Card__Title} to={`${product.id}`}>{product.title}</NavLink>
    </div>
  )
}

export default Card;