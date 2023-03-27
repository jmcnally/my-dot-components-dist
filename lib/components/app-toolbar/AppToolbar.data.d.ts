import React from 'react';
import { ListItemProps } from '../list';
export interface AppToolbarWrapperProps {
    mainMenuItems?: Array<ListItemProps>;
    menuCloseOnClickAway?: boolean;
    onClickAway?: (event: globalThis.KeyboardEvent | React.MouseEvent<Element, globalThis.MouseEvent>) => void;
}
export declare const AppToolbarTestWrapper: (props: AppToolbarWrapperProps) => JSX.Element;
