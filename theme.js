import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    intitialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    light: {
      bg: "white",
      text: "#000",
      logo: "darkblue",
      bgSoft: "#f6f3f3",
      textSoft: "#555",
      border: "lightgray",
    },
    dark: {
      bg: "#222",
      text: "whitesmoke",
      logo: "white",
      bgSoft: "#333",
      textSoft: "lightgray",
      border: "#444",
    },
  },
});
