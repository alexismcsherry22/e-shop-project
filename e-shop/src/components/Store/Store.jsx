import styles from "./Store.module.scss";
import Card from "../../components/Card";



const Store = ({products, onUpdate, onDelete}) => {
  

  return (
    <div>
      <div>
        <p>Featured Carousel</p>
      </div>
      <div className={styles.Store__CardGrid}>
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Store;