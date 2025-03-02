import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
    ],
  },
]);
