import { useState } from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import App from "./App";
import PalettesData from "./data/PalettesData";
import config from "./theme";

function Palettes() {
  const palettes = PalettesData();
  const [theme, setTheme] = useState(
    extendTheme({
      config,
      colors: {
        gray: palettes["Default Palette"],
      },
    })
  );
  const handleThemeChange = (color: string) => {
    setTheme(
      extendTheme({
        config,
        colors: {
          gray: palettes[color],
        },
      })
    );
  };
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App onThemeChange={handleThemeChange} />
    </ChakraProvider>
  );
}

export default Palettes;
