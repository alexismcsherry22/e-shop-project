import styles from "./Carousel.module.scss";
import React, { useEffect, useState } from "react";

//CarouselItem is used to store each individual image used in the carousel
export const CarouselItem = ({ children, width }) => {
    return (
        <div className={styles.Carousel__item} style={{ width: width }}>
            {children}
        </div>
    );
};

//Used to make the carousel function both automatically and by selectables
const Carousel = ({ children }) => {
    //activeIndex refers to the number that the carousel is on based on the paused state
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    //updateIndex has checks for if there is an CarouselItems are inside the Carousel
    //And decides the new index based on if it has any objects present
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    //Checks if the Carousel has been "paused" and if not rotates the activeIndex every 2 seconds and
    //resets the interval value after those activeIndex is updated
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 2000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div
            className={styles.Carousel}
            //Checks and sets the paused bool whenever the mouse enters and leaves the carousel
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className={styles.Carousel__inner}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className={styles.Carousel__indicators}>
                <button
                    className={styles.Carousel__indicators__button}
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${
                                index === activeIndex
                                    ? styles.Carousel__indicators__button_active
                                    : ""
                            }`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                <button
                    className={styles.Carousel__indicators__button}
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;
