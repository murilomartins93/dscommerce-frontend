import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./routes/Catalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />}/>
            <Route path="catalog" element={<Catalog />}/>
            <Route path="product-details/:productId" element={<ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
