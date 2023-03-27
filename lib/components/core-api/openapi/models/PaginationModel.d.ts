export declare type PaginationModel = {
    /**
     * limit (number of records requested to be in the page)
     */
    count?: number;
    /**
     * offset for the next page (number of records requested to be skipped)
     */
    next_start?: number;
    /**
     * offset for the previous page (number of records requested to be skipped)
     */
    previous_start?: number;
    /**
     * offset (number of records requested to be skipped)
     */
    start?: number;
    /**
     * total number of records available in the system
     */
    total_available: number;
};
