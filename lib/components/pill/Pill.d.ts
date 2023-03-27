import { ReactElement } from 'react';
import { CommonProps } from '../CommonProps';
export declare type PillSize = 'small' | 'medium';
export declare type PillStatus = 'success' | 'error' | 'warning' | 'in-progress' | 'default';
export declare type PillVariant = 'filled' | 'outlined';
export interface PillProps extends CommonProps {
    /** Background color for the pill, ignored if 'status' is not 'default' */
    backgroundcolor?: string;
    /** Border color for the pill, ignored if 'status' is not 'default' */
    bordercolor?: string;
    /** The icon for the pill */
    icon?: ReactElement;
    /** The text for the pill. */
    label: string;
    /** Label color for the pill, ignored if 'status' is not 'default' */
    labelcolor?: string;
    /** Determines the size of the pill 'medium' or 'small' */
    size?: PillSize;
    /** Determines the status of the pill component */
    status?: PillStatus;
    /** Determines the variant of the pill 'filled' or 'outlined' */
    variant?: PillVariant;
}
export declare const DotPill: ({ ariaLabel, backgroundcolor, bordercolor, className, "data-testid": dataTestId, icon, label, labelcolor, size, status, variant, }: PillProps) => JSX.Element;
