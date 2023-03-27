import { CommonProps } from '../CommonProps';
export interface TruncateWithTooltipProps extends CommonProps {
    charactersLimit?: number;
    label: string;
    width?: number | string;
}
export declare const DotTruncateWithTooltip: ({ ariaLabel, charactersLimit, className, "data-testid": dataTestId, label, width, }: TruncateWithTooltipProps) => JSX.Element;
