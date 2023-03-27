import { ReactNode } from 'react';
import { TypographyVariant } from '../../typography/Typography';
import { TableRowProps } from '../Table';
export declare const getFormattedTableCellValue: (value: any, typographyVariant: TypographyVariant) => ReactNode;
export declare const getContainerMaxHeightStyle: (stickyHeader?: boolean, maxHeight?: string) => string;
export declare const getSelectedRowIds: (id: string, isChecked: boolean, selectedIds: string[]) => string[];
export declare const getBulkSelectedRowIds: (isChecked: boolean, selectedIds: string[], pageData: TableRowProps[]) => string[];
