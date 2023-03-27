import { ReactNode, MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { IconButtonProps } from '../button/IconButton';
import { ListItemProps } from '../list';
import { BadgeVariant } from '../badge/Badge';
export interface AppToolbarIconButtons extends IconButtonProps {
    /** custom color code for the badge */
    badgeColor?: string;
    /** the number rendered within the badge */
    badgeContent?: number;
    badgeVariant?: BadgeVariant;
    /** if true, the badge will be displayed, else it will be hidden*/
    displayBadge?: boolean;
}
export interface AppToolbarProps extends CommonProps {
    /** If provided will display application logo */
    appLogo?: ReactNode;
    /** URL of the page the application logo link will go to */
    appLogoHref?: string;
    /** If provided will display application logo */
    appLogoSmall?: ReactNode;
    /** User avatar component */
    avatar?: ReactNode;
    /** Control the bottom border of the toolbar, accepts any valid  */
    borderColor?: string;
    /** JSX Element that is displayed between the logo and right nav */
    children?: ReactNode;
    /** If true, main menu will close when item is clicked, if false it will prevent menu closing */
    closeMenuOnItemClick?: boolean;
    /** Allow displaying custom logo */
    customLogo?: ReactNode;
    /** If true, the spacing and height will be shorter */
    dense?: boolean;
    /** If provided will overwrite `mainMenuItems` and display within the main menu drawer */
    mainMenu?: ReactNode;
    /** If provided will display the menu items within the main menu drawer */
    mainMenuItems?: Array<ListItemProps>;
    /** Width of main menu drawer if mainMenu provided, defaults to 240px */
    mainMenuWidth?: number;
    /** If true, the main menu will close if click detected off app toolbar children*/
    menuCloseOnClickAway?: boolean;
    /** Array of nav items to be displayed on the right side */
    navItems?: Array<AppToolbarIconButtons>;
    /** Event callback when leaving menu via tab or clicking away */
    onClickAway?: (event: KeyboardEvent | MouseEvent) => void;
    /** URL of the page the primary logo link will go to */
    primaryLogoHref?: string;
}
export declare const DotAppToolbar: ({ ariaLabel, appLogo, appLogoHref, appLogoSmall, avatar, borderColor, children, className, closeMenuOnItemClick, customLogo, "data-testid": dataTestId, dense, mainMenu, mainMenuItems, mainMenuWidth, menuCloseOnClickAway, navItems, onClickAway, primaryLogoHref, }: AppToolbarProps) => JSX.Element;
