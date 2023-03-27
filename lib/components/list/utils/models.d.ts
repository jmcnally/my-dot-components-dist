import { ElementType, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../../CommonProps';
import { PopperPlacement } from '../../menu/Menu';
import { LinkTarget } from '../../link/Link';
import { tooltipPlacement } from '../../tooltip/Tooltip';
export declare type NestedListType = 'drawer' | 'expandable' | 'menu';
export interface ListProps extends CommonProps {
    /** string or JSX element that is displayed inside the list */
    children?: ReactNode;
    /** The component used for the root node. Either a string to use a HTML element or a component. */
    component?: ElementType;
    /** If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. */
    dense?: boolean;
    /** If true, vertical padding will be removed from the list. */
    disablePadding?: boolean;
    /** Array of list items displayed */
    items?: Array<ListItemProps>;
    /** If nested list type is 'menu', determines the placement of the menu */
    menuPlacement?: PopperPlacement;
    /** If nested type is 'drawer', determines the width of the left spacing */
    nestedDrawerLeftSpacing?: number;
    /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
    nestedListType?: NestedListType;
    /** Width of list, defaults to 240px */
    width?: number | string;
}
export interface ListItemProps extends CommonProps {
    /** string or JSX element that is displayed inside the list */
    child?: ReactNode;
    /** The component used for the root node. Either a string to use a HTML element or a component. */
    component?: ElementType;
    /** If true, a 1px light border is added to the bottom of the list item. */
    divider?: boolean;
    /** If provided, the icon ID which is displayed at the end of the list item */
    endIcon?: ReactNode;
    /** If provided, the list item will be rendered as a link */
    href?: string;
    isOpened?: boolean;
    /** If provided, the menu item will display a nested list */
    items?: Array<ListItemProps>;
    /** If nested list type is 'menu', determines the placement of the menu */
    menuPlacement?: PopperPlacement;
    /** If nested type is 'drawer', determines the width of the left spacing */
    nestedDrawerLeftSpacing?: number;
    /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
    nestedListType?: NestedListType;
    /** Event callback */
    onClick?: (event: MouseEvent) => void;
    /** Menu leave event callback */
    onMenuLeave?: (event: MouseEvent | KeyboardEvent) => void;
    /** The main content element */
    primaryText?: string;
    /** The secondary content element */
    secondaryText?: string;
    /** Selected list item */
    selected?: boolean;
    /** If provided, the icon which is displayed on the front of the list item */
    startIcon?: ReactNode;
    /** where to open the link */
    target?: LinkTarget;
    /** Text which is displayed in the list item */
    text?: string;
    /** Tooltip text displayed on hover */
    tooltip?: string;
    /** Tooltip placement displayed on hover */
    tooltipPlacement?: tooltipPlacement;
}
export interface NestedListProps extends CommonProps {
    /** Element that menu is attached to */
    anchorEl?: Element;
    /** Array of list items displayed */
    items: Array<ListItemProps>;
    /** If nested list type is 'menu', determines the placement of the menu */
    menuPlacement?: PopperPlacement;
    /** If nested type is 'drawer', determines the width of the left spacing */
    nestedDrawerLeftSpacing?: number;
    /** Event callback when leaving menu via tab or clicking away */
    onMenuLeave?: (event: KeyboardEvent | MouseEvent) => void;
    /** if true the nested list is visible */
    open: boolean;
    /** Index of the parent list item */
    parentItemIndex?: number;
    /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
    type?: NestedListType;
}
