import "antd/dist/reset.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "./Custom.css"
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider direction="rtl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
