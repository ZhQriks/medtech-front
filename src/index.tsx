import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Application from "./Application";
import { ChakraProvider } from "@chakra-ui/react";

import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";
import theme from "./style/theme";
import { setupStore } from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container!);
const store = setupStore();

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
);
