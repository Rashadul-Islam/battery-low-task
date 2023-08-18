import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import Result from "../components/Result.js";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

export default routes;
