import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => (
  <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order by: Relevance
    </MenuButton>
    <MenuList>
      <MenuItem>Relevance</MenuItem>
      <MenuItem>Newest</MenuItem>
      <MenuItem>Oldest</MenuItem>
    </MenuList>
  </Menu>
);

export default SortSelector;
