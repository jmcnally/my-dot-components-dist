import { MouseEvent } from 'react';
import { DotColumnHeader } from './TableHeader';
import { TableRowProps } from './Table';
import { CommonProps } from '../CommonProps';
import { TypographyVariant } from '../typography/Typography';
import { MultiSelectBody } from './utils/models';
export interface TableBodyProps extends CommonProps {
    /** The table column headers */
    columns: Array<DotColumnHeader>;
    /** The table body row data */
    data: Array<TableRowProps>;
    /** Message to show if no data */
    emptyMessage?: string;
    /** Optional multi-select checkbox body object **/
    multiSelectBody?: MultiSelectBody;
    /** Row click event callback */
    onRowClick?: (event: MouseEvent, id: string) => void;
    /** Typography variant which will be used for body cell values **/
    typography: TypographyVariant;
}
/**
 * A wrapper component around the TableBody component from @material-ui. This component can be used
 * to determine the functionality of the table.
 */
export declare const DotTableBody: ({ columns, data, emptyMessage, multiSelectBody, onRowClick, typography, }: TableBodyProps) => JSX.Element;
