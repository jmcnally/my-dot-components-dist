import { MouseEvent } from 'react';
import { ListItemProps } from '../list/utils/models';
export declare const childElement: JSX.Element;
export declare const getNavigationItems: (isSelected: (key: number) => boolean, handleClick: (key: number) => void) => ({
    startIconId: string;
    onClick: import("@storybook/addon-actions").HandlerFunction;
    items: ({
        text: string;
        divider: boolean;
        onClick?: undefined;
        selected?: undefined;
        child?: undefined;
    } | {
        onClick: (_event: MouseEvent) => void;
        selected: boolean;
        text: string;
        divider?: undefined;
        child?: undefined;
    } | {
        child: JSX.Element;
        text?: undefined;
        divider?: undefined;
        onClick?: undefined;
        selected?: undefined;
    })[];
    text: string;
    startIcon?: undefined;
    endIconId?: undefined;
    selected?: undefined;
    divider?: undefined;
} | {
    items: ({
        text: string;
        divider: boolean;
        startIcon?: undefined;
        onClick?: undefined;
        selected?: undefined;
    } | {
        startIcon: JSX.Element;
        onClick: (_event: MouseEvent) => void;
        selected: boolean;
        text: string;
        divider?: undefined;
    })[];
    startIcon: JSX.Element;
    text: string;
    startIconId?: undefined;
    onClick?: undefined;
    endIconId?: undefined;
    selected?: undefined;
    divider?: undefined;
} | {
    endIconId: string;
    startIcon: JSX.Element;
    onClick: (_event: MouseEvent) => void;
    selected: boolean;
    text: string;
    startIconId?: undefined;
    items?: undefined;
    divider?: undefined;
} | {
    text: string;
    divider: boolean;
    startIconId?: undefined;
    onClick?: undefined;
    items?: undefined;
    startIcon?: undefined;
    endIconId?: undefined;
    selected?: undefined;
} | {
    startIcon: JSX.Element;
    onClick: (_event: MouseEvent) => void;
    selected: boolean;
    text: string;
    startIconId?: undefined;
    items?: undefined;
    endIconId?: undefined;
    divider?: undefined;
} | {
    divider: boolean;
    startIconId?: undefined;
    onClick?: undefined;
    items?: undefined;
    text?: undefined;
    startIcon?: undefined;
    endIconId?: undefined;
    selected?: undefined;
})[];
export declare const routerNavigationItems: Array<ListItemProps>;
interface SidebarPageTitleProps {
    description?: string;
    iconId: string;
    title: string;
}
export declare const SidebarPageTitle: ({ description, title, iconId, }: SidebarPageTitleProps) => JSX.Element;
export declare const SidebarStoryRoutes: () => JSX.Element;
export {};
