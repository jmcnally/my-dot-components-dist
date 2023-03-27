export declare const handleDeleteClick: () => void;
export declare const handleBulkDeleteClick: () => void;
export declare const actionItemArray: {
    actions: {
        children: JSX.Element;
        key: string;
        onclick: () => void;
    }[];
}[];
export declare const actionCol: {
    id: string;
    label: string;
}[];
export declare const tableData: {
    id: string;
    rowData: {
        action: {
            actions: {
                children: JSX.Element;
                key: string;
                onclick: () => void;
            }[];
        }[];
        type: string;
    };
}[];
export declare const testCols: ({
    id: string;
    label: string;
    truncate: boolean;
} | {
    id: string;
    label: string;
    truncate?: undefined;
})[];
export declare const testData: {
    id: string;
    rowData: {
        name: string;
        type: string;
    };
}[];
