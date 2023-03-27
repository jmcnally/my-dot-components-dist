import { ChangeEvent, FocusEvent, HTMLAttributes, ReactNode, Ref, JSXElementConstructor } from 'react';
import { AutocompleteCloseReason, AutocompleteGetTagProps, AutocompleteRenderOptionState } from '@mui/material';
import { CommonProps } from '../CommonProps';
import { inputSizeOptions } from '../input-form-fields/InputFormFields.propTypes';
export declare const DEFAULT_ACTION_ITEM_TEXT = "Add new item";
export interface ActionItem {
    /** The icon to display on the button */
    iconId?: string;
    /** Event callback */
    onClick: (inputText?: string) => void;
    /** If set to true, it will prevent duplicate item insertion */
    preventDuplicateInsertion?: boolean;
    /** Text/Node displayed */
    text?: string | ReactNode;
}
export declare type AutoCompleteValue = string | string[] | AutoCompleteOption | AutoCompleteOption[] | null;
export interface AutoCompleteOption {
    error?: boolean;
    group?: string;
    title: string;
}
/**
 * AutoCompleteOption can be extended for the use case when customizing
 * autocomplete option rendering by using `renderOption` prop.
 */
export interface AutoCompleteProps<T extends AutoCompleteOption = AutoCompleteOption> extends CommonProps {
    /** The component used to render the listbox. **/
    ListboxComponent?: JSXElementConstructor<HTMLAttributes<HTMLElement>>;
    /** Action button as the last element on the menu **/
    actionItem?: ActionItem;
    /** This prop helps users to fill forms faster */
    autoFocus?: boolean;
    /** default option that is selected */
    defaultValue?: AutoCompleteValue;
    /** Controls size of chip spacing within the autocomplete **/
    dense?: boolean;
    /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
    disablePortal?: boolean;
    /** If true, the input will be disabled. */
    disabled?: boolean;
    endAdornmentTooltip?: string;
    /** If true, the input will be displayed in an error state. */
    error?: boolean;
    /** If `true`, hide the selected options from the list box. */
    filterSelectedOptions?: boolean;
    /** If true, any arbitrary value can be typed in the field */
    freesolo?: boolean;
    /** If true, options will be grouped by category */
    group?: boolean;
    /** The helper text content. */
    helperText?: string;
    /** The id for the input field. */
    inputId: string;
    /** pass a ref to the input element */
    inputRef?: Ref<HTMLInputElement>;
    /** Label displayed above the input field */
    label?: string;
    /** If true, the component will be in a loading state. */
    loading?: boolean;
    /** Maximum height of Popper's <ul> element */
    maxHeight?: number | string;
    /** If true, will allow the user to select multiple options */
    multiple?: boolean;
    /** Callback function which will be executed upon blur event */
    onBlur?: (event: FocusEvent<HTMLElement>) => void;
    /** A function that should be executed when the autocomplete value changes */
    onChange?: (event: ChangeEvent<unknown>, value: AutoCompleteValue, reason: string) => void;
    /** Callback fired when the popup requests to be closed. Use in controlled mode. */
    onClose?: (event: ChangeEvent, reason: AutocompleteCloseReason) => void;
    /** A function that should be executed each time when the input value changes */
    onInputChange?: (event: ChangeEvent<unknown>, value: string, reason: string) => void;
    /** Callback fired when the popup requests to be opened. Use in controlled mode. */
    onOpen?: (event: ChangeEvent) => void;
    /** Controls the popup's open state. */
    open?: boolean;
    /** pre-defined options available to the user */
    options?: Array<T>;
    /** If true, the label will be persistently displayed outside of the field */
    persistentLabel?: boolean;
    /** Placeholder text always displayed inside the input field */
    placeholder?: string;
    /** If true: popper cannot be opened, TextField is in read only mode, change is not allowed  */
    readOnly?: boolean;
    /** Render the option, use `getOptionLabel` by default. */
    renderOption?: (props: HTMLAttributes<HTMLLIElement>, option: T, state: AutocompleteRenderOptionState) => ReactNode;
    /** Render the selected value. */
    renderTags?: (value: T[], getTagProps: AutocompleteGetTagProps) => ReactNode;
    /** If true, the input will be required and label will display accordingly */
    required?: boolean;
    /** Determines the padding within the input field 'medium' or 'small' */
    size?: inputSizeOptions;
    /** value if this is a controlled component */
    value?: AutoCompleteValue;
    /** If true, the label will be displayed in a warning state. */
    warning?: boolean;
}
export declare const DotAutoComplete: <T extends AutoCompleteOption>({ ListboxComponent, actionItem, ariaLabel, autoFocus, className, "data-testid": dataTestId, defaultValue, dense, disabled, disablePortal, endAdornmentTooltip, error, filterSelectedOptions, freesolo, group, helperText, inputId, inputRef, label, loading, maxHeight, multiple, onBlur, onChange, onClose, onInputChange, onOpen, open, options, persistentLabel, placeholder, readOnly, renderOption, renderTags, required, size, value, warning, }: AutoCompleteProps<T>) => JSX.Element;
