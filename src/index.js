import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import hr_HR from "antd/lib/locale/hr_HR";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
  impaired: `${process.env.PUBLIC_URL}/impaired-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={hr_HR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
