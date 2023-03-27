import { ReactNode, ReactElement, ChangeEvent } from 'react';
import { CommonProps } from '../CommonProps';
export declare type tooltipPlacement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
export interface TooltipProps extends CommonProps {
    children: ReactElement;
    leaveDelay?: number;
    onClose?: (event: ChangeEvent) => void;
    open?: boolean;
    placement?: tooltipPlacement;
    title?: ReactNode | string | number;
}
export declare const DotTooltip: ({ ariaLabel, children, className, "data-testid": dataTestId, leaveDelay, onClose, open, placement, title, }: TooltipProps) => JSX.Element;
