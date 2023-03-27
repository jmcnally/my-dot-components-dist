import { ReactElement } from 'react';
import { CommonProps } from '../CommonProps';
import { MultiSelectState, TableRowSelectChangeHandler } from './utils/models';
export interface DotHeaderCheckboxCellProps extends CommonProps {
    multiSelectState: MultiSelectState;
    onCheckAllChange: TableRowSelectChangeHandler;
}
export declare const DotHeaderCheckboxCell: ({ ariaLabel, className, "data-testid": dataTestId, multiSelectState, onCheckAllChange, }: DotHeaderCheckboxCellProps) => ReactElement;
