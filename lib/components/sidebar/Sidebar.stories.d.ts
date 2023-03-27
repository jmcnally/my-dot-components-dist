import { ComponentMeta, Story } from '@storybook/react';
import { SidebarProps } from './Sidebar';
declare const _default: ComponentMeta<({ appLogo, appLogoSmall, ariaLabel, backItem, brandDesc, children, className, collapsable, "data-testid": dataTestId, displayAppLogo, displayBrand, goBack, navItems, nestedListType, onCollapseChange, open, title, titleAvatarProps, width, }: SidebarProps) => JSX.Element>;
export default _default;
export declare const Default: Story<SidebarProps>;
export declare const WithReactRouter: Story<SidebarProps>;
export declare const WithTooltipsWhenCollapsed: Story<SidebarProps>;
export declare const WithBackItem: Story<SidebarProps>;
