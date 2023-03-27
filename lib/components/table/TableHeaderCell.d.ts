import { MouseEvent, ReactNode } from 'react';
import { TextAlignment } from './TableCell';
import { Order } from './TableHeader';
import { TypographyVariant } from '../typography/Typography';
export declare type SortDirection = 'asc' | 'desc';
export interface HeaderCellProps {
    /** Allows cell text alignment: left, right, center  */
    align?: TextAlignment;
    /** Click event function to handle sorting */
    createSortHandler?: (property: string) => (event: MouseEvent<unknown>) => void;
    /** The Id of table cell */
    id?: string;
    /** The order of data which is being sorted by */
    order?: Order;
    /** The ID of the column that you are sorting by */
    orderBy?: string;
    /** Determines sorting order of ascending or descending */
    sortDirection?: SortDirection;
    /** Determines if sorting is enabled */
    sortable?: boolean;
    /**Allows table cell text truncated and displays in only one line */
    truncate?: boolean;
    /** Typography variant which will be used for header cell values **/
    typography: TypographyVariant;
    /** The UID of the cell */
    uid: string;
    /** The value of header cell*/
    value?: ReactNode;
    /** The width of the column */
    width?: string;
}
/**
 * A wrapper component around the TableCell component from @material-ui. This component should only
 * be used inside DotHeaderRow.
 */
export declare const DotHeaderCell: ({ align, typography, createSortHandler, id, order, orderBy, sortable, sortDirection, uid, value, width, }: HeaderCellProps) => JSX.Element;
