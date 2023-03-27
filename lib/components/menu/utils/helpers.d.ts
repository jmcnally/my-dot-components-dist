import { MenuItemProps } from '../Menu';
interface MaxHeightCalculationArgs {
    isDense: boolean;
    maxVisibleItems?: number;
    menuItemHeight?: number | string;
    menuItems: MenuItemProps[];
}
export declare const getDefaultItemHeight: (isDense: boolean) => 36 | 48;
export declare const calculateItemHeight: (isDense: boolean, customItemHeight?: number, menuItemHeight?: number | string) => number | string;
export declare const getNumberOfVisibleItems: (numberOfItems: number, maxVisibleItems?: number) => number;
export declare const calculateMaxHeight: ({ isDense, maxVisibleItems, menuItems, menuItemHeight, }: MaxHeightCalculationArgs) => number | string;
export declare const checkForSubItems: (menuItems: MenuItemProps[]) => boolean;
export declare const checkIfSubmenu: (anchorElement: Element) => boolean;
export declare const checkIfMenuItemSelected: (key: string, selectedKey: string, activeSubmenu: string) => boolean;
export declare const checkForAutoFocus: (autoFocusItem: boolean, isFirstItem: boolean) => boolean;
export {};
