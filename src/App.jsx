import { useState } from "react";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Home";

function App() {
  // Theme config
  const theme = extendTheme({
    colors: {
      DarkGray: "hsl(0, 0%, 63%)",
      Black: "hsl(0, 0%, 0%)",
      White: "hsl(0, 0%, 100%)",
      VeryDarkGray: "hsl(0, 0%, 27%)",
    },
    fontWeights: {
      normal: "500",
      bold: "600",
      extraBold: "700",
    },
    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
