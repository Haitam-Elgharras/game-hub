import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
let name = "platforms";
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();
  if (error) {
    return null;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {name}
      </MenuButton>
      <MenuList>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              name = platform.name;
              return onSelectPlatform(platform);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
