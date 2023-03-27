/// <reference types="react" />
export declare const flyoutListItemClassName = "dot-flyout-list-item";
export declare const flyoutItemLinkClassName = "dot-flyout-item-link";
export declare const listItemLinkClassName = "dot-list-item-link";
export declare const StyledListItem: ((props: {
    href: string;
} & {
    button: true;
} & import("@mui/material").ListItemBaseProps & {
    components?: {
        Root?: import("react").ElementType<any>;
    };
    componentsProps?: {
        root?: import("react").HTMLAttributes<HTMLDivElement> & import("@mui/material").ListItemComponentsPropsOverrides;
    };
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions>;
    centerRipple?: boolean;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses>;
    disabled?: boolean;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    focusRipple?: boolean;
    focusVisibleClassName?: string;
    LinkComponent?: import("react").ElementType<any>;
    onFocusVisible?: import("react").FocusEventHandler<any>;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme>;
    tabIndex?: number;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps>;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions>;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "key" | keyof import("react").AnchorHTMLAttributes<HTMLAnchorElement>> & {
    ref?: import("react").Ref<HTMLAnchorElement>;
}, "button" | "style" | "className" | "classes" | "tabIndex" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "alignItems" | "autoFocus" | "ContainerComponent" | "ContainerProps" | "dense" | "disableGutters" | "disablePadding" | "divider" | "secondaryAction" | "selected" | "components" | "componentsProps">) => JSX.Element) & import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").ExtendButtonBaseTypeMap<import("@mui/material").ListItemTypeMap<{
    button: true;
}, "div">>> & import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").ListItemTypeMap<{
    button?: false;
}, "li">>;
