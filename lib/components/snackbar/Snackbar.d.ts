import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { SnackbarOrigin } from './';
export declare type SnackbarSeverity = 'error' | 'warning' | 'info' | 'success';
export interface SnackbarProps extends CommonProps {
    /** Property used for creating a custom action button. */
    action?: ReactNode;
    /** The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored. */
    anchorOrigin?: SnackbarOrigin;
    /** The message the user sees once the alert displays */
    children: ReactNode;
    /** A callback to handle closing the alert. */
    onClose?: () => void;
    /** Boolean value to switch between opening and closing the alert. */
    open: boolean;
    /** An alert level, indicating the importance of the message. */
    severity: SnackbarSeverity;
    /** Width of the encapsulated Alert component */
    width?: string;
}
export declare const DotSnackbar: ({ action, anchorOrigin, ariaLabel, children, className, "data-testid": dataTestId, onClose, open, severity, width, }: SnackbarProps) => JSX.Element;
