import { ButtonProps } from '../button/Button';
import { CommonProps } from '../CommonProps';
export interface EmptyStateProps extends CommonProps {
    /** primary button properties */
    buttonProps?: ButtonProps;
    /** alt text of image */
    imageAltText?: string;
    /** location of image */
    imageSrc?: string;
    /** subtitle text displayed */
    subtitle?: string;
    /** title text displayed */
    title: string;
}
export declare const DotEmptyState: ({ ariaLabel, buttonProps, className, "data-testid": dataTestId, imageAltText, imageSrc, subtitle, title, }: EmptyStateProps) => JSX.Element;
