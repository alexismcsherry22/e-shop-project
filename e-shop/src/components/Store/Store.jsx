import styles from "./Store.module.scss";
import Card from "../../components/Card";
import Carousel, { CarouselItem } from "../../container/Carousel/carousel";

const Store = ({ products }) => {
    return (
        <div>
            <div className={styles.Store__Carousel}>
                <Carousel>
                    {products.slice(0, 5).map((product) => {
                        return (
                            <CarouselItem>
                                <img
                                    className={styles.Store__Carousel__Image}
                                    src={product.image}
                                ></img>
                            </CarouselItem>
                        );
                    })}
                </Carousel>
            </div>
            <div className={styles.Store__CardGrid}>
                {products.map((product) => {
                    return <Card key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default Store;
