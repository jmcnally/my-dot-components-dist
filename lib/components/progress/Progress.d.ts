import { CommonProps } from '../CommonProps';
export declare type progressColorOptions = 'inherit' | 'primary' | 'secondary';
export declare type progressVariantOptions = 'determinate' | 'indeterminate';
export interface ProgressProps extends CommonProps {
    /** color of the loading spinner border */
    color?: progressColorOptions;
    /** controls the diameter of the loading spinner */
    size?: number | string;
    /** controls thickness of the loading spinner border */
    thickness?: number;
    /** Tooltip text displayed on hover */
    tooltip?: string;
    /** If using static variant, this is the percent of loading complete */
    value?: number;
    /** type of progress spinner displayed */
    variant?: progressVariantOptions;
}
export declare const DotProgress: ({ ariaLabel, color, className, "data-testid": dataTestId, size, thickness, tooltip, value, variant, }: ProgressProps) => JSX.Element;
