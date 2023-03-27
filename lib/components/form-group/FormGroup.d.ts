import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface FormGroupProps extends CommonProps {
    /** The text for the button. Button text should be in sentence case. */
    children: ReactNode;
    /** changes layout to be horizontal if true */
    row?: boolean;
}
export declare function DotFormGroup({ ariaLabel, className, children, 'data-testid': dataTestId, row, }: FormGroupProps): JSX.Element;
