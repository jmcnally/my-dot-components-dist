import { ComponentMeta, Story } from '@storybook/react';
import { AppToolbarProps } from './AppToolbar';
declare const _default: ComponentMeta<({ ariaLabel, appLogo, appLogoHref, appLogoSmall, avatar, borderColor, children, className, closeMenuOnItemClick, customLogo, "data-testid": dataTestId, dense, mainMenu, mainMenuItems, mainMenuWidth, menuCloseOnClickAway, navItems, onClickAway, primaryLogoHref, }: AppToolbarProps) => JSX.Element>;
export default _default;
export declare const Default: Story<AppToolbarProps>;
export declare const WithoutMenu: Story<AppToolbarProps>;
export declare const WithCustomMenu: Story<AppToolbarProps>;
export declare const WithCustomMenuClose: Story<AppToolbarProps>;
