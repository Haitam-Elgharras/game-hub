import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemeWrapper from "../components/ThemeWrapper";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Layout = () => {
  return (
    <ThemeWrapper>
      <SimpleGrid
        columns={1}
        templateColumns={{
          base: "1fr",
        }}
      >
        <NavBar />
        <Box>
          <Outlet />
        </Box>
      </SimpleGrid>
    </ThemeWrapper>
  );
};

export default Layout;
