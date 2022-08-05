import { useEffect } from "react";
import { useState } from "react";
import styles from "./Card.module.scss";

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
      <h6 className={styles.Card__Title}>{product.title}</h6>
      {/* Passing the rest of these values into the product unique page by clicking on the image/title */}
    </div>
  )
}

export default Card;