import { ChangeEvent } from 'react';
import { ControlClickHandler, DynamicFormConfig, DynamicFormControl, DynamicFormControlProps, DynamicFormOutputData, DynamicFormState, DynamicFormStateData, DynamicFormStateItem } from '../models';
import { AutoCompleteValue } from '../../auto-complete/AutoComplete';
import { CheckboxProps } from '../../checkbox/Checkbox';
declare type AutoCompleteChangeHandler = (controlName: string) => (e: ChangeEvent<HTMLInputElement>, value: AutoCompleteValue) => void;
declare type ChangeHandler = (controlName: string) => (e: ChangeEvent<HTMLInputElement>) => void;
declare type CheckboxGroupChangeHandler = (controlName: string) => (event: ChangeEvent<HTMLInputElement>, value: CheckboxProps[]) => void;
export interface InputBaseArgs {
    controlProps: DynamicFormControlProps;
    disabled?: boolean;
    index: number;
    liveValidation: boolean;
}
export interface ControlledInputArgs extends InputBaseArgs {
    controlName: string;
    formData: DynamicFormStateData;
    handleChange: AutoCompleteChangeHandler | ChangeHandler | CheckboxGroupChangeHandler;
}
export interface UncontrolledInputArgs extends InputBaseArgs {
    formState?: DynamicFormState;
    handleClick?: (formValues?: DynamicFormOutputData) => void;
}
export declare const getInitialStateFromControl: ({ hidden, initialValue, controlType, validation }: DynamicFormControl, liveValidation: boolean, formValues: DynamicFormOutputData) => DynamicFormStateItem;
export declare const getInitialFormState: (config: DynamicFormConfig, liveValidation: boolean) => DynamicFormState;
export declare const getControlClickHandler: (formValues: DynamicFormOutputData, onControlClick?: ControlClickHandler) => () => void;
export declare const buildInputTextControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildInputSelectControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildAutocompleteControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildRadioGroupControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildCheckboxControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildCheckboxGroupControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildSwitchControl: ({ controlName, controlProps, disabled, formData, handleChange, index, }: ControlledInputArgs) => JSX.Element;
export declare const buildButtonControl: ({ controlProps, disabled, index, handleClick, }: UncontrolledInputArgs) => JSX.Element;
export declare const buildProgressButtonControl: ({ controlProps, disabled, index, handleClick, }: UncontrolledInputArgs) => JSX.Element;
export declare const buildResetControl: ({ controlProps, disabled, handleClick, index, }: UncontrolledInputArgs) => JSX.Element;
export declare const buildSubmitControl: ({ controlProps, disabled, formState, index, liveValidation, }: UncontrolledInputArgs) => JSX.Element;
export declare const buildProgressSubmitControl: ({ controlProps, disabled, formState, index, liveValidation, }: UncontrolledInputArgs) => JSX.Element;
export {};
