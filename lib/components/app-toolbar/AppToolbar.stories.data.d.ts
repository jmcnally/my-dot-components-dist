import { History } from 'history';
import { ListItemProps } from '../list';
import { AppToolbarIconButtons } from './AppToolbar';
export declare const defaultMainMenuItems: Array<ListItemProps>;
export declare const defaultNavItems: AppToolbarIconButtons[];
export declare const getMenuNavigationItems: (history: History) => Array<ListItemProps>;
export declare const MenuNavigationRoutes: () => JSX.Element;
