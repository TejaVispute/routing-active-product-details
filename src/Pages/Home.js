import { Link } from "react-router-dom";
import { products } from "./products";

const Home = () => {
  return (
    <>
      <h1>This is home page of our web page</h1>

      {products.map((e) => {
        let url = `/ProductDetails/${e.name}`;
        return (
          <div className="data">
            <h3>{e.name}</h3>
            <Link to={url}>view details</Link>
          </div>
        );
      })}
    </>
  );
};

export default Home;
