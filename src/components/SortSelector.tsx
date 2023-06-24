import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (order: string) => void;
  order: string;
}

const SortSelector = ({ onSelectedOrder, order }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-released", label: "Newest" },
    { value: "released", label: "Oldest" },
    { value: "name", label: "Name" },
    { value: "-metaCritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find((o) => o.value === order);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectedOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
