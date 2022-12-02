import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        color: "#3c404a",
      },
    },
  },
  textStyles: {
    h2: {
      marginTop: "0",
      marginBottom: "0.5rem",
      fontWeight: "500",
      lineHeight: "1.5",
    },
  },
  fontWeights: {
    bold: 500,
  },
  colors: {
    primary: {
      50: "#1B1B1B",
    },
    orange_juice: {
      50: "#FD6915",
    },
    pale: {
      50: "#E5E5E5",
    },
  },
});

export default myTheme;
