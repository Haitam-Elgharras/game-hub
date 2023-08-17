import { Box, Heading, Text } from "@chakra-ui/layout";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/provider";
import { extendTheme } from "@chakra-ui/theme-utils";
import PalettesData from "../data/PalettesData";
import { useThemeStore } from "../hooks/store";
import config from "../theme";

const ErrorPage = () => {
  const error = useRouteError();

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
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not exist."
            : "Sorry unexpected error occured."}
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default ErrorPage;
