import { CommonProps } from '../CommonProps';
import { DynamicFormConfig, DynamicFormOutputData, DynamicFormState } from './models';
export interface DynamicFormProps extends CommonProps {
    config: DynamicFormConfig;
    disabled?: boolean;
    liveValidation?: boolean;
    onChange?: (formData: DynamicFormState) => void;
    onSubmit?: (formData: DynamicFormOutputData) => void;
}
export declare const DotDynamicForm: ({ ariaLabel, className, "data-testid": dataTestId, config, disabled: isFormDisabled, liveValidation, onChange, onSubmit, }: DynamicFormProps) => JSX.Element;
