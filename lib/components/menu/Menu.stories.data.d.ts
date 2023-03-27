import { MenuItemProps } from '../menu/Menu';
export declare const defaultMenuItems: ({
    children: JSX.Element;
    classes: string;
    key: string;
} | {
    children: string;
    key: string;
    classes?: undefined;
})[];
export declare const multiLevelMenuItems: MenuItemProps[];
export declare const buttonMenuItems: {
    children: string;
    key: string;
}[];
export declare const tableMenuItems: ({
    children: string;
    key: string;
} | {
    children: JSX.Element;
    key: string;
})[];
export declare const customHeightMenuItems: MenuItemProps[];
export interface MenuTableArgs {
    onIconButtonClick: (event: MouseEvent<HTMLButtonElement>, menuId: string) => void;
}
export declare const MenuTable: ({ onIconButtonClick }: MenuTableArgs) => JSX.Element;
