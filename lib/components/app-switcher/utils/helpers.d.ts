import { PointerEvent, ReactElement } from 'react';
import { MenuItemProps } from '../../menu/Menu';
import { ApplicationModel } from '../../core-api/openapi';
export declare type RecentAppInstance = {
    application: Partial<ApplicationModel>;
    lastAccess: number;
};
export declare const getLogoForAppType: (appType: string) => string;
export declare const daiAppsHeaderMenuItem: (count?: number) => {
    children: JSX.Element;
    key: string;
};
export declare const sectionHeaderMenuItem: (title: string, count: number, showEmpty?: boolean, showCount?: boolean) => {
    children: JSX.Element;
    key: string;
};
export declare const createMenuItem: (url: string, title: string, subtitle: string, onClick: (event: PointerEvent<Element>) => void) => ReactElement;
export declare const createTopLevelMenuItem: (url: string, logo: string, title: string, openNewTab?: boolean) => ReactElement;
export declare const createAppTypeLabel: (appTypeName: string, logo: string, appProps: MenuItemProps[]) => JSX.Element;
export declare const getInstanceStateText: (application: {
    instance_state?: number;
}) => "Production" | "Non-production";
export declare const sortRecentAppInstancesFn: (a: RecentAppInstance, b: RecentAppInstance) => number;
export declare const sortAppInstancesFn: (a: Partial<ApplicationModel>, b: Partial<ApplicationModel>) => number;
export declare const RECENT_INSTANCES_KEY = "dot-app-switcher-recent-app-instances";
export declare const recentAppInstancesSetter: (latestInstance: Partial<ApplicationModel>, maxRecentItems: number) => (orig: RecentAppInstance[]) => RecentAppInstance[];
