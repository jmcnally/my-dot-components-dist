import { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface DrawerHeaderProps extends CommonProps {
    children: ReactNode;
    onClose: (event: MouseEvent | KeyboardEvent) => void;
    variant: string;
}
export declare const DotDrawerHeader: ({ ariaLabel, children, className, "data-testid": dataTestId, onClose, variant, }: DrawerHeaderProps) => JSX.Element;
