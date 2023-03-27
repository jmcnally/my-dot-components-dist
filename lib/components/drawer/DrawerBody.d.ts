import { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface DrawerBodyProps extends CommonProps {
    children: ReactNode;
    headerExists: boolean;
    onClose: (event: MouseEvent | KeyboardEvent) => void;
    variant: string;
}
export declare const DotDrawerBody: ({ ariaLabel, children, className, "data-testid": dataTestId, headerExists, onClose, variant, }: DrawerBodyProps) => JSX.Element;
