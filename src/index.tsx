import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Application from "./Application";

import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./app/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const container = document.getElementById("root");
const root = createRoot(container!);
const store = setupStore();
import "./style/index.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#28B089",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
