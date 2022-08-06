import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts } from '../../services/server';

const ViewCard = ({product}) => {
  //const [product, setProduct] = useState(null);

  // const getData = async () => {
  //   const data = await getProducts();
  //     setProduct(data);
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  return (
    <div>
      <img src={product.image}></img>
      <h3>{product.title}</h3>
    </div>
  )
}

export default ViewCard;