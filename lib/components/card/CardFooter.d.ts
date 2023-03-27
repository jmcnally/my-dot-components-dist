import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface CardFooterProps extends CommonProps {
    /** The content for the CardFooter.*/
    children: ReactNode;
}
export declare const DotCardFooter: ({ ariaLabel, children, className, "data-testid": dataTestId, }: CardFooterProps) => JSX.Element;
