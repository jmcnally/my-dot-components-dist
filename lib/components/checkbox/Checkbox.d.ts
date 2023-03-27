import { RadioButtonProps } from '../radio/RadioButton';
export declare type CheckboxSize = 'medium' | 'small';
export declare type CheckboxLabelPlacement = 'bottom' | 'end' | 'start';
export interface CheckboxProps extends RadioButtonProps {
    /** accessibility labelled by */
    ariaLabelledby?: string;
    /** If true, the ripple effect will be disabled. */
    disableRipple?: boolean;
    /** if true the checkbox will display with intermediate */
    indeterminate?: boolean;
}
export declare function DotCheckbox({ ariaLabel, ariaLabelledby, checked, className, 'data-testid': dataTestId, disabled, disableRipple, id, indeterminate, inputRef, label, labelPlacement, name, onChange, required, size, value, }: CheckboxProps): JSX.Element;
