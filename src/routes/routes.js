import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Pages from "../pages/pagesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
]);

export default router;
