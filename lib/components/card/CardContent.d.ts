import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface CardContentProps extends CommonProps {
    /** The content for the CardContent.*/
    children: ReactNode;
}
export declare const DotCardContent: ({ ariaLabel, children, className, "data-testid": dataTestId, }: CardContentProps) => JSX.Element;
