import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import App from "./App";
import PalettesData from "./data/PalettesData";
import { useThemeStore } from "./hooks/store";
import config from "./theme";

function Palettes() {
  const palettes = PalettesData();
  const selectedThemeColor = useThemeStore((s) => s.selectedThemeColor);

  const theme = extendTheme({
    config,
    colors: {
      gray: palettes[selectedThemeColor],
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  );
}

export default Palettes;
