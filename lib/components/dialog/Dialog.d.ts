import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButtonProps';
import { CommonProps } from '../CommonProps';
export interface DialogButtonProps extends BaseButtonProps {
    /** Icon placed after the children. */
    endIcon?: ReactNode;
    /** The text displayed on the button */
    label?: string;
    /** The icon to display on the button */
    startIcon?: ReactNode;
}
export interface SubmitButtonProps extends DialogButtonProps {
    /** The type of button to be used */
    type?: 'primary' | 'destructive';
}
export interface DialogProps extends CommonProps {
    /** props passed down to the cancel button */
    cancelButtonProps?: DialogButtonProps;
    /** boolean that toggles existence of the Cancel button */
    cancelButtonVisible?: boolean;
    /** components or string that is displayed in the dialog body */
    children?: ReactNode;
    /** boolean that toggles visibility of close icon on top right of dialog header*/
    closeIconVisible?: boolean;
    /** boolean if true then the dialog will not close*/
    closeOnClickAway?: boolean;
    /** boolean that toggles existence of primary action button */
    hasPrimaryAction?: boolean;
    /** The callback to be executed when the action is cancelled */
    onCancel?: (event: KeyboardEvent | MouseEvent) => void;
    /** The callback to be executed when the action is submitted */
    onSubmit?: (event: KeyboardEvent | MouseEvent) => void;
    /** if true, the dialog is visible to the user */
    open: boolean;
    /** props passed down to the submit button */
    submitButtonProps?: SubmitButtonProps;
    /** dialog heading */
    title: ReactNode;
}
export declare const DotDialog: ({ ariaLabel, cancelButtonProps, cancelButtonVisible, className, "data-testid": dataTestId, children, closeIconVisible, closeOnClickAway, hasPrimaryAction, onCancel, onSubmit, open, submitButtonProps, title, }: DialogProps) => JSX.Element;
