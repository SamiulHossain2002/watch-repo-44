import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Main from "./Layout/Main";
import Orders from "./Component/Orders/Orders";
import About from "./Component/About/About";
import Dadu from "./Component/Dadu/Dadu";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("watch.json"),
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/dadu",
          element: <Dadu></Dadu>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
