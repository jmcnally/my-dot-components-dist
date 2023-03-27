import { KeyboardEvent, MouseEvent, PointerEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type LinkColor = 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
export declare type LinkUnderline = 'always' | 'hover' | 'none';
export declare type LinkTarget = '_blank' | '_self';
export interface LinkProps extends CommonProps {
    /** text for the link. */
    children: ReactNode;
    /** link color */
    color?: LinkColor;
    /** href for the link. */
    href?: string;
    /** event callback */
    onClick?: (event: KeyboardEvent<Element> | MouseEvent<Element>) => void;
    /** mouse enter event callback */
    onMouseEnter?: (event: MouseEvent<Element>) => void;
    /** specifies the relationship between the current document and the linked document */
    /** event callback, for handling a middle-click or other non-'onClick' behavior */
    onPointerDown?: (event: PointerEvent<Element>) => void;
    rel?: string;
    /** tab order for the link */
    tabIndex?: number;
    /** where to open the link */
    target?: LinkTarget;
    /** Tooltip text displayed on hover */
    tooltip?: string;
    /**  underline the link */
    underline?: LinkUnderline;
}
export declare const DotLink: ({ ariaLabel, children, className, color, "data-testid": dataTestId, href, onClick, onMouseEnter, onPointerDown, rel, tabIndex, target, tooltip, underline, }: LinkProps) => JSX.Element;
