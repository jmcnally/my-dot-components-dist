import { ElementType, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'inherit';
export interface TypographyProps extends CommonProps {
    /** The content of the component. */
    children: ReactNode;
    /** The component used for the root node. Either a string to use a HTML element or a component. */
    component?: ElementType;
    /** If true, the typography will not have a bottom margin set */
    noMarginBottom?: boolean;
    /** If true, the text will wrap and not be truncated */
    noWrap?: boolean;
    /** Applies the theme typography styles. */
    variant?: TypographyVariant;
}
export declare const DotTypography: ({ ariaLabel, className, "data-testid": dataTestId, children, component, noMarginBottom, noWrap, variant, }: TypographyProps) => JSX.Element;
