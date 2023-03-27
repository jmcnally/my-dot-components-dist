import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type PopperPlacement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
export interface MenuProps extends CommonProps {
    /** Element that menu is attached to */
    anchorEl?: Element;
    /** If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. **/
    dense?: boolean;
    /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
    disablePortal?: boolean;
    /** Unique ID that ties a particular menu to a specific element */
    id: string;
    /** If true, will display a loading indicator in the menu */
    loading?: boolean;
    /** Maximum number of visible menu items */
    maxVisibleItems?: number;
    /** Used to specify height of each menu item when custom component, set to "auto" if no specific height is needed or leave empty for auto calculation based on `maxVisibleItems` */
    menuItemHeight?: number | string;
    /** Array of items to be displayed inside the menu */
    menuItems: Array<MenuItemProps>;
    /** Determines the placement of the menu */
    menuPlacement?: PopperPlacement;
    /** Event callback when leaving menu via tab or clicking away */
    onLeave?: (event: KeyboardEvent | MouseEvent) => void;
    /** Callback when menu item is selected */
    onSelect?: (event: MouseEvent | KeyboardEvent, menuId: string, itemKey: string) => void;
    /** If true, the menu is open. */
    open?: boolean;
    /** Key of the item which needs to be selected. If provided, item will be highlighted. */
    selectedKey?: string;
}
export interface MenuItemProps {
    /** Defines a string value that labels the current element **/
    ariaLabel?: string;
    /** The text displayed on the item */
    children?: ReactNode;
    /** Space delimited CSS classes to be attributed to the menu item */
    classes?: string;
    /** If true, the item will be displayed in a disabled state. */
    disabled?: boolean;
    /** If true, a 1px light border is added to the bottom of the menu item. */
    divider?: boolean;
    /** Used to set custom item height (in pixels). This value has priority over "menuItemHeight" prop. */
    height?: number;
    /** Children items, for multi-level menu display */
    items?: MenuItemProps[];
    /** A key that can be used to determine which item was clicked */
    key?: string;
}
export declare const DotMenu: ({ anchorEl, ariaLabel, className, "data-testid": dataTestId, dense, disablePortal, id, loading, maxVisibleItems, menuItemHeight, menuItems, menuPlacement, onLeave, onSelect, open, selectedKey, }: MenuProps) => JSX.Element;
