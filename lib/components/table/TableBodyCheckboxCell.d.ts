import { ReactElement } from 'react';
import { CommonProps } from '../CommonProps';
export interface DotBodyCheckboxCellProps extends CommonProps {
    isChecked: boolean;
    onChange: (isChecked: boolean, rowId: string) => void;
    rowId: string;
}
export declare const DotBodyCheckboxCell: ({ ariaLabel, className, "data-testid": dataTestId, isChecked, onChange, rowId, }: DotBodyCheckboxCellProps) => ReactElement;
