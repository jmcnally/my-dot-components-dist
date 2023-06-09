import { Story, ComponentMeta } from '@storybook/react';
import { TableProps } from './Table';
declare const _default: ComponentMeta<({ ariaLabel, bodyTypography, className, columns, count, data, "data-testid": dataTestId, emptyMessage, footerTypography, headerTypography, loading, maxHeight, multiSelect, order, orderBy, onRowClick, onUpdateData, page, rowsPerPage, stickyHeader, sortable, toolbar, }: TableProps) => JSX.Element>;
export default _default;
export declare const Default: Story<TableProps>;
export declare const LocallyPaginatedTable: Story<TableProps>;
export declare const RemotelyPaginatedTable: Story<TableProps>;
export declare const WithActionMenu: Story<TableProps>;
export declare const WithCheckboxSelection: Story<TableProps>;
export declare const EmptyTable: Story<TableProps>;
