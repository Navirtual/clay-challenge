import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClientIndex, AdminIndex } from "./";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientIndex />,
  },
  {
    path: "admin",
    element: <AdminIndex />,
  },
]);
export const App = () => {
  return <RouterProvider router={router} />;
};
