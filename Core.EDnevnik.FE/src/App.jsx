import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import LoginProvider from "./hoc/LoginProvider";
import { routes } from "./routes";
import LargeIndicator from "./components/LoadingOverlay";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <LoginProvider>
      <Suspense fallback={<LargeIndicator />}>
        <RouterProvider router={routes} />
      </Suspense>
      <ToastContainer />
    </LoginProvider>
  );
};

export default App;
