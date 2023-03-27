import { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { TypographyVariant } from '../typography/Typography';
export declare type AlertBannerSeverity = 'error' | 'info' | 'success' | 'warning';
export interface AlertBannerProps extends CommonProps {
    /** The action to display. It renders after the message, at the end of the alert */
    action?: ReactNode;
    /** The content of the component */
    children: ReactNode | string;
    /** callback which is triggered when alert banner is closed */
    onClose?: (event: MouseEvent) => void;
    /** If true, the alert banner will have rounded corners */
    roundedCorners?: boolean;
    /** will determine color and icon being used */
    severity: AlertBannerSeverity;
    /** when specified, will control the text that is used inside the alert banner */
    textVariant?: TypographyVariant;
}
export declare const DotAlertBanner: ({ action, ariaLabel, children, className, "data-testid": dataTestId, onClose, roundedCorners, severity, textVariant, }: AlertBannerProps) => JSX.Element;
