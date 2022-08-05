import React from 'react'
import { NavLink } from 'react-router-dom';
import { seedProducts } from '../../services/server';
import styles from "./Home.module.scss";

const Home = () => {

  return (
    <div className={styles.Home}>
      <div className={styles.Home__Header}>
        <h1>Welcome to the E-Shop</h1>
      </div>
      <div className={styles.Home__Para}>
        <p>Check out the products we offer on the Store Page</p>
      </div>
      <div className={styles.Home__Button__Position}>
        <NavLink className={styles.Home__Button} to="/store">
        Go to the Store
      </NavLink>
      </div>
      
      {/* <NavLink
        className={styles.Home__Button}
        onClick={seedProducts}
        to="/store">
        Go to the Store
      </NavLink> */}
    </div>
  )
}

export default Home;