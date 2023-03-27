import { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { DotColumnHeader, Order } from './TableHeader';
import { RowsPerPageOption } from './TablePagination';
import { TypographyVariant } from '../typography/Typography';
import { MultiSelect } from './utils/models';
export declare const TABLE_TYPOGRAPHY_VARIANT = "body1";
export interface TableRowProps extends CommonProps {
    /** row identifier that will be passed to onRowClick callback */
    id?: string;
    /** row data where keys map to column ids and values to cell values */
    rowData: any;
    /** if the row is selected */
    selected?: boolean;
}
export interface TableProps extends CommonProps {
    /** Typography variant which will be used for table body cell values **/
    bodyTypography?: TypographyVariant;
    /** The table header columns */
    columns: Array<DotColumnHeader>;
    /** Total number of items for paginated table.
        Prop is ignored for non-paginated tables (no rowsPerPage)
        and for tables with internally managed sorting (no onUpdateData). */
    count?: number;
    /** The table body row data.
        If paging/sorting are managed by consumer (onUpdateData callback provided) this is the data for the current page.
        If paging/sorting are managed internally (no onUpdateData callback) this is all the data. */
    data: Array<TableRowProps>;
    /** Message that is shown if data is empty */
    emptyMessage?: string;
    /** Typography variant which will be used for table pagination **/
    footerTypography?: TypographyVariant;
    /** Typography variant which will be used for table header cell values **/
    headerTypography?: TypographyVariant;
    /** Table is loading */
    loading?: boolean;
    /** Maximum height of table container */
    maxHeight?: string;
    /** Optional multi-select checkbox object **/
    multiSelect?: MultiSelect;
    /** Row click event callback */
    onRowClick?: (event: MouseEvent, id: string) => void;
    /** Update data callback if data is managed by consumer */
    onUpdateData?: (order: Order, orderBy: string, page: number, rowsPerPage: number) => void;
    /** The sort order of table data 'asc', 'desc' */
    order?: Order;
    /** The ID of the column that you are sorting by */
    orderBy?: string;
    /** The zero-based index of the current page  for paginated table */
    page?: number;
    /** Rows per page for paginated table */
    rowsPerPage?: RowsPerPageOption;
    /** Table is sortable */
    sortable?: boolean;
    /** Table header is sticky */
    stickyHeader?: boolean;
    /** Toolbar displayed above column headers */
    toolbar?: ReactNode;
}
export declare const sortComparator: (a: TableRowProps, b: TableRowProps, orderBy: string) => 0 | 1 | -1;
export declare const getComparator: (order: Order, orderBy: string) => (a: TableRowProps, b: TableRowProps) => number;
export declare function stableSort<T>(array: T[], comparator: (order: T, orderBy: T) => number): T[];
/**
 * A wrapper component around the Table component from @material-ui. This component can be used for
 *  creating a common structure for tables in the system.
 */
export declare const DotTable: ({ ariaLabel, bodyTypography, className, columns, count, data, "data-testid": dataTestId, emptyMessage, footerTypography, headerTypography, loading, maxHeight, multiSelect, order, orderBy, onRowClick, onUpdateData, page, rowsPerPage, stickyHeader, sortable, toolbar, }: TableProps) => JSX.Element;
