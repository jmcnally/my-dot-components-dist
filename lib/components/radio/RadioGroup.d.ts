import { ChangeEvent, ReactNode } from 'react';
import { RadioButtonBaseProps, RadioButtonProps } from './RadioButton';
export interface RadioGroupBaseProps extends RadioButtonBaseProps {
    /** if true makes all radio buttons disabled */
    disableGroup?: boolean;
    /** Icon placed before the children. */
    endIcon?: ReactNode;
    /** If true, the label should be displayed in an error state. */
    error?: boolean;
    /** The label of the radio button group. */
    groupLabel?: string;
    /** The helper text content. */
    helperText?: string;
    /** if true user is required to select an option */
    required?: boolean;
    /** changes layout to be horizontal if true */
    row?: boolean;
    /** Icon placed before the children. */
    startIcon?: ReactNode;
}
export interface RadioGroupProps extends RadioGroupBaseProps {
    /** The default input element value. Use when the component is not controlled or has a value. */
    defaultValue?: string;
    /** A function that should be executed when the value of the radio button changes */
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    /** Array of RadioButtonProps used to create the radio buttons */
    options: RadioButtonProps[];
}
export declare const DotRadioGroup: ({ ariaLabel, className, "data-testid": dataTestId, defaultValue, disableGroup, endIcon, error, helperText, groupLabel, name, labelPlacement, onChange, value, options, startIcon, required, row, size, }: RadioGroupProps) => JSX.Element;
