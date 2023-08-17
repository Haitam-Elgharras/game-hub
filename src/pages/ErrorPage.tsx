import { Box, Heading, Text } from "@chakra-ui/layout";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemeWrapper from "../components/ThemeWrapper";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <ThemeWrapper>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not exist."
            : "Sorry unexpected error occured."}
        </Text>
      </Box>
    </ThemeWrapper>
  );
};

export default ErrorPage;
