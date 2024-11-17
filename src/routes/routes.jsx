import React from "react";
import HomePage from "../HomePage/HomePage";
import ShoppingPage from "../ShoppingPage/ShoppingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Checkout from "../Checkout/Checkout";
import Layout from "../Layout"; // Import the new Layout component

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "shopping-page",
    element: (
      <Layout>
        <ShoppingPage />
      </Layout>
    ),
  },
  {
    path: "checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
];

export default routes;
