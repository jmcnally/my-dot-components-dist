import { FormEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface FormProps extends CommonProps {
    /** The content for the Form. **/
    children: ReactNode;
    /** Callback function when form is submitted **/
    onSubmit: (event: FormEvent) => void;
}
export declare const DotForm: ({ ariaLabel, children, className, "data-testid": dataTestId, onSubmit, }: FormProps) => JSX.Element;
