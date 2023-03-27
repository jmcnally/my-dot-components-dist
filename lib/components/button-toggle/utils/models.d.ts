import { CommonProps } from '../../CommonProps';
export declare type ButtonToggleSingleValue = string | number | boolean;
export declare type ButtonToggleSize = 'small' | 'medium' | 'large';
export declare type ButtonToggleOrientation = 'horizontal' | 'vertical';
export declare type ButtonToggleValue = ButtonToggleSingleValue | Array<ButtonToggleSingleValue>;
export interface ButtonToggleOption extends CommonProps {
    ariaLabel: string;
    disabled?: boolean;
    iconId?: string;
    text?: string;
    tooltip?: string;
    value: ButtonToggleValue;
}
