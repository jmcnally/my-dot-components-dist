import { ChangeEvent, Ref } from 'react';
import { CommonProps } from '../CommonProps';
export declare type RadioSize = 'medium' | 'small';
export declare type RadioLabelPlacement = 'bottom' | 'end' | 'start';
export interface RadioButtonBaseProps extends CommonProps {
    /** id of radio button */
    id?: string;
    /** pass a ref to the input element */
    inputRef?: Ref<HTMLInputElement>;
    /** label placement options available 'bottom' | 'end' | 'start' */
    labelPlacement?: RadioLabelPlacement;
    /** name of radio input */
    name?: string;
    /** if true user is required to select an option */
    required?: boolean;
    /** controls the size of the radio button 'medium', 'small' */
    size?: RadioSize;
    /** unique value for the radio button */
    value?: string;
}
export interface RadioButtonProps extends RadioButtonBaseProps {
    /** if the radio button is selected */
    checked?: boolean;
    /** if true makes the radio button disabled */
    disabled?: boolean;
    /** text displayed next to the radio button */
    label?: string;
    /** A function that should be executed when the value of the radio buttom changes */
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}
export declare function DotRadioButton({ ariaLabel, checked, className, 'data-testid': dataTestId, disabled, id, inputRef, label, labelPlacement, name, onChange, required, size, value, }: RadioButtonProps): JSX.Element;
