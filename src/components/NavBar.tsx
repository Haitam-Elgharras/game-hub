import { HStack, Image, Input } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="contain" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
