import { CommonProps } from '../CommonProps';
export declare type LinearProgressColor = 'primary' | 'secondary' | 'error' | 'warning' | 'purple';
export declare type LinearProgressVariant = 'buffer' | 'determinate' | 'indeterminate' | 'query';
export interface LinearProgressProps extends CommonProps {
    /** The color of the component. */
    color?: LinearProgressColor;
    /** The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100. */
    value?: number;
    /** The value for the buffer variant. Value between 0 and 100. **/
    valueBuffer?: number;
    /** The variant to use. Use indeterminate or query when there is no progress value. */
    variant?: LinearProgressVariant;
}
export declare const DotLinearProgress: ({ ariaLabel, color, className, "data-testid": dataTestId, value, valueBuffer, variant, }: LinearProgressProps) => JSX.Element;
