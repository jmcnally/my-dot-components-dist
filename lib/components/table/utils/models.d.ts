import { ReactNode } from 'react';
import { TableRowProps } from '../Table';
export declare type RowSelectionChangeHandler = (isChecked: boolean, rowId: string) => void;
export declare type MultiSelectState = 'unchecked' | 'checked' | 'indeterminate';
export declare type TableRowSelectChangeHandler = (isChecked: boolean, selectedTableRowIds: string[]) => void;
export interface MultiSelect {
    bulkActions?: ReactNode;
    onCheckAllChange?: TableRowSelectChangeHandler;
    onCheckRowChange?: TableRowSelectChangeHandler;
    onClearAllChange?: TableRowSelectChangeHandler;
}
interface MultiSelectTableBase {
    selectedTableRowIds: string[];
}
export interface MultiSelectHeader extends MultiSelectTableBase {
    onCheckAllChange: TableRowSelectChangeHandler;
    pageData: TableRowProps[];
}
export interface MultiSelectBody extends MultiSelectTableBase {
    onCheckIndividualChange?: RowSelectionChangeHandler;
}
export {};
