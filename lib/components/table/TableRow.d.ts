import { MouseEvent, ReactNode } from 'react';
import { DotColumnHeader } from './TableHeader';
import { CommonProps } from '../CommonProps';
import { TableRowProps } from './Table';
import { TypographyVariant } from '../typography/Typography';
import { MultiSelectBody } from './utils/models';
export interface EmptyRowProps {
    cols: number;
    message?: string;
    typography: TypographyVariant;
}
export interface RowProps extends CommonProps {
    /** The table column headers */
    columns: Array<DotColumnHeader>;
    /** The table body row data */
    data: TableRowProps;
    /** Optional multi-select checkbox body object **/
    multiSelectBody?: MultiSelectBody;
    /** Event callback of action button of menu */
    onActionMenuTrigger: (el: HTMLElement, menuItem: Array<ReactNode>) => void;
    /** Event callback */
    onClick?: (event: MouseEvent, id: string) => void;
    /** uniques key of table cell */
    rowKey: string;
    /** if the row is selected */
    selected?: boolean;
    /** Typography variant which will be used for body cell values **/
    typography: TypographyVariant;
}
/**
 * A wrapper component around the TableRow component from @material-ui. This component can be used
 * for manipulating data prior to displaying the data inside the table
 */
export declare const DotTableRow: ({ columns, className, data, multiSelectBody, onActionMenuTrigger, onClick, rowKey, selected, typography, }: RowProps) => JSX.Element;
export declare const EmptyDotRow: ({ cols, message, typography, }: EmptyRowProps) => JSX.Element;
