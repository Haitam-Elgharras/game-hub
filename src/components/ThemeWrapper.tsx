import { ReactNode } from "react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import PalettesData from "../data/PalettesData";
import { useThemeStore } from "../hooks/store";
import config from "../theme";

interface Props {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: Props) => {
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
      {children}
    </ChakraProvider>
  );
};

export default ThemeWrapper;
