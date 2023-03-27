import { ListItemProps, ListProps, NestedListProps } from './utils/models';
export declare const DotList: ({ ariaLabel, children, className, component, "data-testid": dataTestId, dense, disablePadding, items, menuPlacement, nestedDrawerLeftSpacing, nestedListType, width, }: ListProps) => JSX.Element;
export declare const DotListItem: ({ ariaLabel, className, component, "data-testid": dataTestId, divider, endIcon, href, isOpened, onClick, onMenuLeave, items, menuPlacement, nestedDrawerLeftSpacing, nestedListType, primaryText, secondaryText, selected, startIcon, target, text, tooltip, tooltipPlacement, }: ListItemProps) => JSX.Element;
export declare const NestedList: ({ ariaLabel, anchorEl, "data-testid": dataTestId, items, menuPlacement, nestedDrawerLeftSpacing, onMenuLeave, open, parentItemIndex, type, }: NestedListProps) => JSX.Element;