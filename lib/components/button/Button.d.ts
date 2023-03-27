import { ReactNode } from 'react';
import { BaseButtonProps } from '../BaseButtonProps';
export interface ButtonProps extends BaseButtonProps {
    /** The text for the button. Button text should be in sentence case. */
    children: ReactNode;
    /** Icon placed after the children. */
    endIcon?: ReactNode;
    /** Icon placed before the children. */
    startIcon?: ReactNode;
}
/** This component wraps the Button component from @material-ui. */
export declare const DotButton: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
