import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";
import NetefRouter from "./components/router/router";
import { ModalProvider } from "./contexts/modalContext";
import { LoadingProvider } from "./contexts/loadingContext";
import LoginProvider from "./contexts/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <ModalProvider>
        <LoadingProvider>
          <NetefRouter />
        </LoadingProvider>
      </ModalProvider>
    </LoginProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
