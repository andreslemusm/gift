import { Characters } from "../routes/characters";
import { Favorites } from "../routes/favorites";
import { Layout } from "../routes/layout";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("./characters"),
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
