import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useThemeStore } from "../hooks/store";

const CustomizedPalette = () => {
  const colors = [
    "Dark Palette",
    "Red Palette",
    "Pink Palette",
    "Blue Palette",
  ];
  const { selectedThemeColor, setSelectedThemeColor } = useThemeStore();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedThemeColor || "Select a Palette"}
      </MenuButton>
      <MenuList>
        {colors.map((color) => (
          <MenuItem
            key={color}
            onClick={() => {
              return setSelectedThemeColor(color);
            }}
          >
            {color}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomizedPalette;
