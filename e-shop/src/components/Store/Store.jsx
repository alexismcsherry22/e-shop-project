import styles from "./Store.module.scss";
import Card from "../../components/Card";
import Carousel, { CarouselItem } from "../../container/Carousel/carousel";

const Store = ({ products }) => {
    return (
        <div>
            <div className={styles.Store__Carousel}>
                <Carousel>
                    {/* Uses .slice to grab the first 5 indexes in the products array and creates 
                        a carousel item for each */}
                    {products.slice(0, 5).map((product, index) => {
                        return (
                            <CarouselItem key={index}>
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
