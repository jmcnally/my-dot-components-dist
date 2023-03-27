import { ChangeEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { TypographyVariant } from '../typography/Typography';
export declare const ROWS_PER_PAGE_OPTIONS: readonly [10, 25, 50, 100, 150, 200];
export declare type RowsPerPageOption = typeof ROWS_PER_PAGE_OPTIONS[number];
export interface TablePaginationProps extends CommonProps {
    /** Total number of rows (-1 if unknown) */
    count: number;
    /** Callback fired when the page is changed */
    onPageChange: (newPage: number) => void;
    /** Callback fired when the number of rows per page is changed */
    onRowsPerPageChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    /** The zero-based index of the current page */
    page?: number;
    /** The number of rows per page */
    rowsPerPage?: RowsPerPageOption;
    /** Typography variant which will be used for pagination text */
    typography: TypographyVariant;
}
/** This component wraps the TablePagination component from @material-ui. */
export declare const DotTablePagination: ({ ariaLabel, className, count, "data-testid": dataTestId, onPageChange, onRowsPerPageChange, page, rowsPerPage, typography, }: TablePaginationProps) => JSX.Element;
