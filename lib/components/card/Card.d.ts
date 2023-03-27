import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface CardProps extends CommonProps {
    /** The content for the Card.*/
    children: ReactNode;
}
export declare const DotCard: ({ ariaLabel, children, className, "data-testid": dataTestId, }: CardProps) => JSX.Element;
