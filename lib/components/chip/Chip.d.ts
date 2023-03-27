import { MouseEvent, ReactElement } from 'react';
import { CommonProps } from '../CommonProps';
export declare type ChipSize = 'medium' | 'small';
export declare const DEFAULT_CHARACTERS_LIMIT = 32;
export interface ChipProps extends CommonProps {
    /** If provided, will display an avatar which takes precedence over icon */
    avatar?: ReactElement;
    /** Maximum number of characters until the label gets truncated. Default is 32. */
    charactersLimit?: number;
    /** The text for the chip. */
    children: string;
    /** If true, the chip is disabled */
    disabled?: boolean;
    /** If true, the chip is in error */
    error?: boolean;
    /** If true, the chip is clickable */
    isClickable?: boolean;
    /** If true, the chip is deletable */
    isDeletable?: boolean;
    /** Event callback on click */
    onClick?: (event: MouseEvent) => void;
    /** Event callback when delete icon is clicked */
    onDelete?: (event: MouseEvent) => void;
    /** Determines the size of the chip 'medium' or 'small' */
    size?: ChipSize;
    /** The icon to display on the chip */
    startIcon?: ReactElement;
}
export declare const DotChip: ({ ariaLabel, avatar, charactersLimit, children, className, "data-testid": dataTestId, disabled, error, isClickable, isDeletable, onClick, onDelete, size, startIcon, }: ChipProps) => JSX.Element;
