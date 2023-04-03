import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientIndex } from ".";
import { RUTA } from "./utils";

const router = createBrowserRouter([
  {
    path: RUTA.BASE,
    element: <ClientIndex />,
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
