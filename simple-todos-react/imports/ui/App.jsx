import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientIndex } from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientIndex />,
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
