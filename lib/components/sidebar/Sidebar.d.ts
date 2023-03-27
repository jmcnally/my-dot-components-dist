import { MouseEvent, ReactNode } from 'react';
import { AvatarProps } from '../avatar/Avatar';
import { ListItemProps, NestedListType } from '../list';
import { CommonProps } from '../CommonProps';
export interface BackItemProps extends CommonProps {
    /** If provided, the icon ID which is displayed on the front of the list item */
    iconId?: string;
    /** Event callback */
    onClick: (event: MouseEvent) => void;
    /** Text which is displayed in the list item */
    text: string;
    /** The tooltip text displayed on hover */
    title?: string;
}
export interface SidebarProps extends CommonProps {
    /** If provided will display application logo */
    appLogo?: ReactNode;
    /** If provided will display application logo */
    appLogoSmall?: ReactNode;
    /** props used by the back item */
    backItem?: BackItemProps;
    /** If displayBrand is true this text will be displayed above the Digital.ai branding */
    brandDesc?: string;
    /** If provided will display below the navItems */
    children?: ReactNode;
    /** If true will display the expand/collapse icon button */
    collapsable?: boolean;
    /** If true will display appLogo provided at the top */
    displayAppLogo?: boolean;
    /** If true will display Digital.ai branding at the bottom */
    displayBrand?: boolean;
    /** If true will display the go back nav item at the top of the sidebar */
    goBack?: boolean;
    /** Array of nav items */
    navItems?: Array<ListItemProps>;
    /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
    nestedListType?: NestedListType;
    /** onCollapseChange callback, true when the sidebar is collapsed **/
    onCollapseChange?: (collapsed: boolean) => void;
    /** If true, the sidebar is open. */
    open?: boolean;
    /** The text that is displayed at the top of the sidebar */
    title?: string;
    /** If provided, will display an avatar next to the title text */
    titleAvatarProps?: AvatarProps;
    /** Width of main menu drawer if mainMenu provided, defaults to 240px */
    width?: number;
}
export declare const DotSidebar: ({ appLogo, appLogoSmall, ariaLabel, backItem, brandDesc, children, className, collapsable, "data-testid": dataTestId, displayAppLogo, displayBrand, goBack, navItems, nestedListType, onCollapseChange, open, title, titleAvatarProps, width, }: SidebarProps) => JSX.Element;
