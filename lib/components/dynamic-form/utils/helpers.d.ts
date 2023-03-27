import { ControlCondition, DisabledControlCondition, DynamicFormConfig, DynamicFormOutputData, DynamicFormState, DynamicFormStateData } from '../models';
export declare const getControlValue: <T>(controlName: string, data: DynamicFormStateData) => T;
export declare const getOutputFormData: (formState: DynamicFormState) => DynamicFormOutputData;
export declare const checkIfHiddenControl: (hidden: ControlCondition, formValues: DynamicFormOutputData) => boolean;
export declare const checkIfDisabledControl: (disabled: DisabledControlCondition, formValues: DynamicFormOutputData, isFormValid: boolean) => boolean;
export declare const getFormDataFromInitialValues: (config: DynamicFormConfig) => DynamicFormOutputData;
