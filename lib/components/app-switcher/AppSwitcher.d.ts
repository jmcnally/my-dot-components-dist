import { MouseEvent } from 'react';
import { ApplicationModel } from '../core-api/openapi';
import { CommonProps } from '../CommonProps';
interface ActiveAppInfo {
    name: string;
    product?: 'Release' | 'Deploy' | 'Agility' | 'Continuous Testing' | 'Intelligence' | 'Application Protection';
}
interface CommonAppSwitcherProps extends CommonProps {
    activeApp: ActiveAppInfo;
    maxRecentInstances?: number;
    noAppTypeLabel?: string;
    onClose?: (event: MouseEvent | KeyboardEvent) => void;
    searchInstancesThreshold?: number;
    yOffset?: number;
    zIndex?: number;
}
interface AppSwitcherViewProps extends CommonAppSwitcherProps {
    apps: Partial<ApplicationModel>[];
    open: boolean;
    platformConsoleUrl?: string;
    selectedAppType: string;
}
export declare const DotAppSwitcherView: ({ activeApp, apps, className, maxRecentInstances, noAppTypeLabel, platformConsoleUrl, onClose, open, searchInstancesThreshold, selectedAppType, yOffset, zIndex, }: AppSwitcherViewProps) => JSX.Element;
interface AppSwitcherProps extends CommonAppSwitcherProps {
    accountId?: string;
    includePlatformConsole?: boolean;
}
export declare const DotAppSwitcher: ({ accountId, includePlatformConsole, onClose, ...commonProps }: AppSwitcherProps) => JSX.Element;
export {};
