import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemeWrapper from "../components/ThemeWrapper";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <ThemeWrapper>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </ThemeWrapper>
  );
};

export default Layout;
