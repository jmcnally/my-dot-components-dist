import { ReactNode } from 'react';
import { ApiError, ApplicationModel } from './openapi';
interface CoreApiProviderProps {
    apiUrl: string;
    children: ReactNode;
    token?: string;
}
declare type booleanSetter = (b: boolean) => boolean;
interface DotCoreApiContextProps {
    applications: ApplicationModel[];
    applicationsError: ApiError;
    applicationsLoading: boolean;
    isAppSwitcherOpen: boolean;
    loadApplications: (accountId: string, force?: boolean) => void;
    platformConsoleUrl: string;
    selectedAppSwitcherAppType: string;
    setIsAppSwitcherOpen: (open: boolean | booleanSetter) => void;
    setSelectedAppSwitcherAppType: (appType: string) => void;
    setToken: (token: string) => void;
}
export declare const DotCoreApiProvider: ({ apiUrl, token, children, }: CoreApiProviderProps) => JSX.Element;
export declare const useDotCoreApiContext: () => DotCoreApiContextProps;
export {};
