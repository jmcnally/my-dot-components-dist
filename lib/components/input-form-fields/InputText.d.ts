import { ReactNode } from 'react';
import { InputProps } from './InputFormFields.propTypes';
export declare const DELAY_MS = 300;
export declare type endAdornmentIconType = 'warning' | 'error' | 'check';
export interface InputTextProps extends InputProps {
    /** The HTML autocomplete property to pass along to the input tag. Used for
    controlling autofill behavior in forms. This property follows this HTML spec:
    https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
    **/
    autoComplete?: string;
    endAdornmentTooltip?: string;
    /** If true, the input will use debounce functionality. **/
    hasDebounce?: boolean;
    /** max of rows for multiline line */
    maxRows?: number;
    /** number of rows for multiline line */
    minRows?: number;
    /** if multiline it wil render multiple lines */
    multiline?: boolean;
    /** Placeholder text always displayed inside the input field */
    placeholder?: string;
    /** value of the InputText */
    value?: string;
}
export interface EndIconProps {
    dataTestId?: string;
    endAdornmentTooltip?: string;
    endIcon?: ReactNode;
    error?: boolean;
    success?: boolean;
    warning?: boolean;
}
export declare const DotInputText: ({ autoComplete, autoFocus, className, defaultValue, "data-testid": dataTestId, disabled, error, endAdornmentTooltip, fullWidth, hasDebounce, helperText, endIcon, id, inputRef, label, maxRows, minRows, multiline, name, onBlur, onChange, onFocus, onKeyDown, onMouseUp, persistentLabel, placeholder, readOnly, required, shrink, startIcon, size, success, type, value, warning, }: InputTextProps) => JSX.Element;
