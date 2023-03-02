import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/pages/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/pages/Error";
import RestaurantMenu from "./components/pages/RestaurantMenu";
import Instamart from "./components/pages/Instamart";
import UserContext from "./components/utils/UserContext";

const About = lazy(() => import("./components/pages/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    username: "sameer sheikh",
    email: "dumy2@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user: user }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
