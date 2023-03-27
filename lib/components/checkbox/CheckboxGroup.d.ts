import { ChangeEvent } from 'react';
import { RadioGroupBaseProps } from '../radio/RadioGroup';
import { CheckboxProps } from './Checkbox';
export interface CheckboxGroupProps extends RadioGroupBaseProps {
    /** Array of CheckboxProps to set by default */
    defaultValues?: CheckboxProps[];
    /** A function that should be executed when the value of the checkbox changes */
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: CheckboxProps[]) => void;
    /** Array of CheckboxProps used to create the checkboxes */
    options: CheckboxProps[];
    /** select all label */
    selectAllLabel?: string;
    /** if true use parent for selecting/deselecting all */
    showSelectAll?: boolean;
}
export declare function DotCheckboxGroup({ ariaLabel, className, 'data-testid': dataTestId, defaultValues, disableGroup, endIcon, error, groupLabel, helperText, name, labelPlacement, onChange, options, showSelectAll, required, row, selectAllLabel, startIcon, size, }: CheckboxGroupProps): JSX.Element;
