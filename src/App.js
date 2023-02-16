import Content from "./Content";
import "./styles.css";
import Nav from "./Navbar";
// import WithoutLogin from "./WithoutLogin";
import { useLogincontext } from "./CreateContext";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Pages/PageNotFound";
export default function App() {
  let { loginLogout, setLoginLogout } = useLogincontext();
  console.log(loginLogout);
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ProductDetails/:details" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* {loginLogout !== "Login" ? <Content /> : <WithoutLogin />} */}
    </div>
  );
}
