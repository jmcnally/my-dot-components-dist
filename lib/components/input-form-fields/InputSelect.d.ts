import { InputProps } from './InputFormFields.propTypes';
export declare type OptionType = string | InputSelectOption;
export interface InputSelectOption {
    /** options that appear in dropdown */
    option: string;
    /** value of input field when option is selected */
    value?: string;
}
export interface InputSelectProps extends InputProps {
    /** default value of select field */
    defaultValue?: string;
    /** options of select dropdown */
    options: Array<OptionType>;
}
export declare const DotInputSelect: ({ ariaLabel, autoFocus, className, "data-testid": dataTestId, defaultValue, disabled, endIcon, error, fullWidth, helperText, id, inputRef, label, name, onBlur, onChange, onFocus, onKeyDown, options, persistentLabel, readOnly, required, shrink, size, startIcon, success, value, warning, }: InputSelectProps) => JSX.Element;
