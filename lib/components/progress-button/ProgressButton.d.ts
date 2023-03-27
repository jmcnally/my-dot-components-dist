import { ButtonProps } from '../button/Button';
export declare const SPINNER_DEFAULT_SIZE = 20;
export declare const SPINNER_LARGE_SIZE = 24;
export interface ProgressButtonProps extends ButtonProps {
    /** Is spinner displayed */
    isLoading?: boolean;
}
export declare const DotProgressButton: ({ ariaLabel, children, className, "data-testid": dataTestId, disabled, disableRipple, fullWidth, isLoading, isSubmit, onClick, size, tooltip, type, }: ProgressButtonProps) => JSX.Element;
