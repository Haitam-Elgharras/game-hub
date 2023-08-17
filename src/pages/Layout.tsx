import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import PalettesData from "../data/PalettesData";
import { useThemeStore } from "../hooks/store";
import config from "../theme";

export const Layout = () => {
  // All the pallets components are just for implementing the theme selector
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
      <NavBar />
      <Outlet />
    </ChakraProvider>
  );
};
