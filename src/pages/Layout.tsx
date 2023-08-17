import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemeWrapper from "../components/ThemeWrapper";

const Layout = () => {
  return (
    <ThemeWrapper>
      <NavBar />
      <Outlet />
    </ThemeWrapper>
  );
};

export default Layout;
