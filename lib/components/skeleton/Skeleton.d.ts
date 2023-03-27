import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type SkeletonVariantType = 'circular' | 'rectangular' | 'text';
export interface SkeletonProps extends CommonProps {
    /** component(s) inside a skeleton will constrain the size/shape */
    children?: ReactNode;
    /** Determine height of skeleton */
    height?: number | string;
    /** Control shape of skeleton */
    variant?: SkeletonVariantType;
    /** Determine width of skeleton */
    width?: number | string;
}
export declare const DotSkeleton: ({ ariaLabel, children, className, "data-testid": dataTestId, height, width, variant, }: SkeletonProps) => JSX.Element;
