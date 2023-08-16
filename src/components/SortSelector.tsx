import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useGameQueryStore } from "../hooks/store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-released", label: "Newest" },
    { value: "released", label: "Oldest" },
    { value: "name", label: "Name" },
    { value: "-metaCritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedOrder = useGameQueryStore((s) => s.gameQuery.selectedOrder);
  const currentSortOrder = sortOrders.find((o) => o.value === selectedOrder);
  const setSelectedOrder = useGameQueryStore((s) => s.setSelectedOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectedOrder(order.value)}
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
