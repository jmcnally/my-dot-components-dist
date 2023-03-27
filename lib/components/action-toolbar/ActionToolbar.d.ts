import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type DotActionBarVarient = 'regular' | 'dense';
export interface DotActionBarProps extends CommonProps {
    /** string or JSX element that is displayed inside the toolbar */
    children?: ReactNode;
    /** DotActionBarVarient dense and regular for toolbar height */
    variant?: DotActionBarVarient;
}
export declare const DotActionToolbar: ({ ariaLabel, children, className, "data-testid": dataTestId, variant, }: DotActionBarProps) => JSX.Element;
