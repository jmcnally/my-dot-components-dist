import { TextAlignment } from './TableCell';
import { TypographyVariant } from '../typography/Typography';
import { MultiSelectHeader } from './utils/models';
export interface DotColumnHeader {
    align?: TextAlignment;
    id: string;
    label?: string;
    sortable?: boolean;
    truncate?: boolean;
    width?: string;
}
export declare type Order = 'asc' | 'desc';
export interface HeaderProps {
    columns: Array<DotColumnHeader>;
    multiSelectHeader?: MultiSelectHeader;
    onRequestSort: (property: string) => void;
    order?: Order;
    /** The ID of the column that you are sorting by */
    orderBy?: string;
    sortable: boolean;
    typography: TypographyVariant;
}
/**
 * A wrapper component around the TableHead component from @material-ui. This component can be used
 * to determine the functionality of the table header.
 */
export declare const DotHeaderRow: ({ columns, multiSelectHeader, onRequestSort, order, orderBy, sortable, typography, }: HeaderProps) => JSX.Element;
