import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Desktop30 from "../pages/Desktop-30";
import Desktop19 from "../pages/Desktop-19";
import Desktop20 from "../pages/Desktop-20";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Desktop30 />,
  },
  {
    path: "/desktop30",
    element: <Desktop30 />,
  },
  {
    path: "/desktop19",
    element: <Desktop19 />,
  },
  {
    path: "/desktop20",
    element: <Desktop20 />,
  },
]);

function Navigation() {
  return <RouterProvider router={router} />;
}

export default Navigation;
