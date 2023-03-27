import { TextAlignment } from './TableCell';
import { TableProps } from './Table';
export declare const actionMenuColumns: ({
    id: string;
    label: string;
    width: string;
    truncate: boolean;
    sortable?: undefined;
} | {
    id: string;
    label: string;
    width: string;
    truncate?: undefined;
    sortable?: undefined;
} | {
    id: string;
    label: string;
    sortable: boolean;
    width?: undefined;
    truncate?: undefined;
})[];
export declare const dataWithActionMenu: {
    id: string;
    rowData: {
        title: string;
        hometown: string;
        action: {
            children: JSX.Element;
            iconId: string;
            key: string;
        }[];
    };
}[];
export declare const defaultColumns: ({
    id: string;
    label: string;
    width: string;
    truncate: boolean;
    align?: undefined;
    sortable?: undefined;
} | {
    id: string;
    label: string;
    width: string;
    truncate?: undefined;
    align?: undefined;
    sortable?: undefined;
} | {
    id: string;
    label: string;
    align: TextAlignment;
    width: string;
    truncate?: undefined;
    sortable?: undefined;
} | {
    id: string;
    label: string;
    sortable: boolean;
    align: TextAlignment;
    width: string;
    truncate: boolean;
})[];
export declare const defaultData: ({
    id: string;
    className: string;
    selected: boolean;
    rowData: {
        title: string;
        hometown: string;
        fans: number;
        delete: JSX.Element;
        className: string;
    };
} | {
    id: string;
    rowData: {
        title: string;
        hometown: string;
        fans: number;
        delete: JSX.Element;
        className?: undefined;
    };
    className?: undefined;
    selected?: undefined;
})[];
export declare const paginatedColumns: ({
    id: string;
    label: string;
    width: string;
    truncate: boolean;
    align?: undefined;
} | {
    id: string;
    label: string;
    width: string;
    align: TextAlignment;
    truncate?: undefined;
})[];
export declare const paginatedData: {
    id: string;
    rowData: {
        name: string;
        hit: string;
    };
}[];
export declare const MultiSelectTable: (props: TableProps) => JSX.Element;
