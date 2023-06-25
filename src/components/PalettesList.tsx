import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectColor: (color: string) => void;
}
let selectedColor = "";
const CustomizedPalette = ({ onSelectColor }: Props) => {
  const colors = [
    "Default Palette",
    "Red Palette",
    "Blue Palette",
    "Teal Palette",
    "Orange Palette",
    "Pink Palette",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedColor || "Select a Palette"}
      </MenuButton>
      <MenuList>
        {colors.map((color) => (
          <MenuItem
            key={color}
            onClick={() => {
              selectedColor = color;
              onSelectColor(color);
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
