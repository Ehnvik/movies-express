import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Movies } from "./components/Movies/Movies";
import { Movie } from "./components/Movie/Movie";
import { Home } from "./components/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
    ],
  },
]);
