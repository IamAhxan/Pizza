import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./src/pages/Home";
import Menu from "./src/pages/Menu";
import Cart from "./src/pages/Cart";
import Checkout from "./src/pages/Checkout";
import Order, { orderLoader } from "./src/pages/Order";
import RootLayout from "./src/components/RootLayout";
import OrderNotFound from "./src/pages/OrderNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index={true} element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        errorElement={<OrderNotFound />}
        loader={orderLoader}
        path="/order/:orderId"
        element={<Order />}
      />
    </Route>
  )
);

export default router;
