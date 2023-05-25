export type TDropdownMenuList = {
  defaultLabel: string;
  menuItems: string[];
  selectedIndex: number | null;
  onSelect?: (index: number | null) => void;
};
