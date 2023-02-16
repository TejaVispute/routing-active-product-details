import { useParams } from "react-router-dom";
import { products } from "./products";

const ProductDetails = () => {
  let { details } = useParams();
  let { name, id, profession } = products.find(
    (value) => value.name === details
  );
  // console.log(filtered);
  return (
    <>
      <h1>This is product {name} details</h1>
      <h3> product id is {id}</h3>
      <h3> product id is {profession}</h3>
    </>
  );
};

export default ProductDetails;
