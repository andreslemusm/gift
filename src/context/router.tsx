import { Characters } from "../routes/characters";
import { Layout } from "../routes/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Characters />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
