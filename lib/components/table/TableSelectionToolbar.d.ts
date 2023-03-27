import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface TableSelectionToolbarProps extends CommonProps {
    bulkActions?: ReactNode;
    onClearAll?: () => void;
    selectedRowsNumber: number;
}
export declare const DotTableSelectionToolbar: ({ ariaLabel, bulkActions, className, "data-testid": dataTestId, onClearAll, selectedRowsNumber, }: TableSelectionToolbarProps) => JSX.Element;
