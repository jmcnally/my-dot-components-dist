import { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { IconFontSize } from '../icon/Icon';
export declare type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';
export declare type IconButtonSize = 'small' | 'medium';
export interface IconButtonProps extends CommonProps {
    /** 'default', 'inherit', 'primary', 'secondary' */
    color?: IconButtonColor;
    /** If true, the ripple effect is disabled. */
    disableRipple?: boolean;
    /** If true, the button will be disabled. */
    disabled?: boolean;
    /** The icon to display on the button */
    iconId: string;
    /** Determines the size of the icon itself and spacing around it */
    iconSize?: IconFontSize;
    /** Event callback */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /** Determines the size of the button and padding around the icon */
    size?: IconButtonSize;
    /** Help text to be displayed on icon hover */
    tooltip?: string;
}
export declare const DotIconButton: ({ ariaLabel, className, color, "data-testid": dataTestId, disabled, disableRipple, iconId, iconSize, onClick, tooltip, size, }: IconButtonProps) => JSX.Element;
