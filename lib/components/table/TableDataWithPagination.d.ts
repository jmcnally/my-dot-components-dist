export interface TableDataWithPagination {
    data: Array<any>;
    pagination: {
        current_page: number;
        has_next: boolean;
        has_previous: boolean;
        size: number;
        total_elements: number;
        total_pages: number;
    };
}
