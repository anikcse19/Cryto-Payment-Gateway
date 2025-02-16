import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CheckOut from "../pages/CheckOut";
import Payment from "../pages/Payment";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Balances from "../pages/Dashboard/Balances";
import Checkouts from "../pages/Dashboard/Checkouts";
import Settings from "../pages/Dashboard/Settings";
import Analytics from "../pages/Dashboard/Analytics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CheckOut />,
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/checkouts",
        element: <Checkouts />,
      },
      {
        path: "/dashboard/balances",
        element: <Balances />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
    ],
  },
]);

export default routes;
