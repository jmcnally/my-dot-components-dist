import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export declare type DrawerVariant = 'permanent' | 'persistent' | 'temporary';
export declare type DrawerModalProps = {
    container?: Element;
    hideBackdrop?: boolean;
    style?: CSSProperties;
};
export declare type DrawerPaperProps = {
    style?: CSSProperties;
};
export interface DrawerSection extends CommonProps {
    /** nested child component of drawer section */
    children: ReactNode;
}
export interface DrawerProps extends CommonProps {
    /** Props applied to the Modal element. */
    ModalProps?: DrawerModalProps;
    /** Props applied to the Paper element. */
    PaperProps?: DrawerPaperProps;
    /** Side from which the drawer will appear 'bottom', 'left', 'right', 'top' */
    anchor?: DrawerAnchor;
    /** string or JSX element that is displayed inside the drawer */
    children?: ReactNode;
    /** Props applied to drawer body */
    drawerBodyProps?: Omit<DrawerSection, 'ariaLabel'>;
    /** Props applied to drawer footer */
    drawerFooterProps?: Omit<DrawerSection, 'ariaLabel'>;
    /** Props applied to drawer header */
    drawerHeaderProps?: Omit<DrawerSection, 'ariaLabel'>;
    /** The height of the drawer when anchor is 'top' or 'bottom' */
    height?: string;
    /** Callback fired when the component requests to be closed. */
    onClose?: (event: MouseEvent | KeyboardEvent) => void;
    /** If true, the drawer is open. */
    open: boolean;
    /** The variant to use 'permanent', 'persistent', 'temporary' */
    variant?: DrawerVariant;
    /** The width of the drawer when anchor is 'left' or 'right' */
    width?: string;
}
export declare const DotDrawer: ({ anchor, ariaLabel, className, children, "data-testid": dataTestId, drawerBodyProps, drawerFooterProps, drawerHeaderProps, height, ModalProps, onClose, open, PaperProps, variant, width, }: DrawerProps) => JSX.Element;
