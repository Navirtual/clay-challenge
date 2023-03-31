import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientIndex } from ".";

import { RUTAS } from "./utils";

const router = createBrowserRouter([
  {
    path: RUTAS.BASE,
    element: <ClientIndex />,
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
