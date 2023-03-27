import { KeyboardEvent, KeyboardEventHandler, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { MenuItemProps } from './Menu';
export interface SubMenuCreateArgs {
    anchorElement: Element;
    isOpened: boolean;
    subMenuId: string;
    subMenuItems: MenuItemProps[];
}
export interface MenuListProps extends CommonProps {
    autoFocusItem?: boolean;
    dense?: boolean;
    id?: string;
    maxVisibleItems: number;
    menuItemHeight: number | string;
    menuItems: Array<MenuItemProps>;
    onItemSelect?: (event: MouseEvent | KeyboardEvent, itemKey: string) => void;
    onKeyDown?: KeyboardEventHandler<Element>;
    onSubMenuCreate?: (args: SubMenuCreateArgs) => ReactNode;
    selectedKey?: string;
}
/**
 * Since this component is used inside 'ClickAwayListener',
 * it needs to be contained within 'forwardRef' function
 */
export declare const DotMenuList: import("react").ForwardRefExoticComponent<MenuListProps & import("react").RefAttributes<HTMLLIElement>>;
