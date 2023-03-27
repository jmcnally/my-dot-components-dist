import { CommonProps } from '../CommonProps';
export interface InputLabelProps extends CommonProps {
    /** If true, the input will be disabled. */
    disabled?: boolean;
    /** If true, the label will be displayed in an error state. */
    error?: boolean;
    /**
     * id to identify the element, also used to create label "for" and helper text id attribute
     * values while it's optional, it is considered required for accessiblity best practice.
     */
    id: string;
    /** The label content. */
    label?: string;
    /** If true, the label is displayed as required and the input element` will be required. */
    required?: boolean;
}
export declare const DotInputLabel: ({ "data-testid": dataTestId, disabled, error, id, label, required, }: InputLabelProps) => JSX.Element;
