import { ReactNode } from 'react';
import { SnackbarSeverity } from './Snackbar';
declare const initialState: {
    message: string;
    open: boolean;
    severity: string;
    id: string;
}[];
interface SnackbarProviderProps {
    /** The components or string that load inside of the snackbar provider. */
    children: ReactNode;
}
interface DotSnackbarProps {
    alerts: typeof initialState;
    enqueueMessage: (message: string, severity: SnackbarSeverity) => void;
    removeMessage: (id: string) => void;
}
export declare const DotSnackbarContainer: () => JSX.Element;
export declare const DotSnackbarProvider: ({ children }: SnackbarProviderProps) => JSX.Element;
export declare const useDotSnackbarContext: () => DotSnackbarProps;
export {};
