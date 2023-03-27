import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type BadgeOverlap = 'circular' | 'rectangular';
export declare type BadgeVariant = 'standard' | 'dot';
export interface BadgeProps extends CommonProps {
    /** custom color code for the badge */
    badgeColor?: string;
    /** the number rendered within the badge */
    badgeContent?: number;
    /** component which will be wrapped with the badge */
    children: ReactNode;
    /** if true, the badge will be completely hidden*/
    invisible?: boolean;
    /** max count to show */
    max?: number;
    /** outline shape of the child component */
    overlap?: BadgeOverlap;
    variant?: BadgeVariant;
}
export declare const DotBadge: ({ ariaLabel, badgeColor, badgeContent, children, className, "data-testid": dataTestId, invisible, max, overlap, variant, }: BadgeProps) => JSX.Element;
