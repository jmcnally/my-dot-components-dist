import { ChangeEvent, Ref } from 'react';
import { CommonProps } from '../CommonProps';
export declare type SwitchColor = 'default' | 'primary' | 'secondary';
export declare type SwitchSize = 'medium' | 'small';
export declare type SwitchLabelPlacement = 'bottom' | 'end' | 'start' | 'top';
export interface SwitchProps extends CommonProps {
    /** determines the default state of the switch */
    checked?: boolean;
    /** color options available 'default', 'primary', 'secondary' */
    color?: SwitchColor;
    /** if true makes the switch disabled */
    disabled?: boolean;
    /** id to identify the element */
    id?: string;
    /** pass a ref to the input element */
    inputRef?: Ref<HTMLInputElement>;
    /** text displayed next to the switch */
    label?: string;
    /** label placement options available 'bottom', 'end', 'start', 'top' */
    labelPlacement?: SwitchLabelPlacement;
    /** A function that should be executed when the value of the switch changes */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** controls the size of the switch 'medium', 'small' */
    size?: SwitchSize;
}
export declare const DotSwitch: ({ ariaLabel, checked, className, color, "data-testid": dataTestId, disabled, id, inputRef, label, labelPlacement, onChange, size, }: SwitchProps) => JSX.Element;
