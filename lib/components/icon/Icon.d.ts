import { CommonProps } from '../CommonProps';
export declare type IconFontSize = 'small' | 'medium';
export interface IconProps extends CommonProps {
    /** Determines the size of the icon and spacing around it */
    fontSize?: IconFontSize;
    /** The ID of the icon to display on the button */
    iconId: string;
    /** Tooltip text displayed on hover */
    tooltip?: string;
}
export declare const DotIcon: ({ ariaLabel, className, "data-testid": dataTestId, fontSize, iconId, tooltip, }: IconProps) => JSX.Element;
