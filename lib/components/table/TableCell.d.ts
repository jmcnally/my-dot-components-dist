import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { TypographyVariant } from '../typography/Typography';
export declare type TextAlignment = 'center' | 'inherit' | 'justify' | 'left' | 'right';
export interface CellProps extends CommonProps {
    align?: TextAlignment;
    cellKey?: string;
    colspan?: number;
    id?: string;
    noWrap?: boolean;
    onActionMenuTrigger?: (el: HTMLElement, menuItem: Array<ReactNode>) => void;
    typography: TypographyVariant;
    value?: unknown;
}
/**
 * A wrapper component around the TableCell component from @material-ui.
 */
export declare const DotBodyCell: ({ ariaLabel, align, cellKey, className, colspan, "data-testid": dataTestId, noWrap, onActionMenuTrigger, typography, value, }: CellProps) => JSX.Element;
