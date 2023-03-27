export declare type CancelablePromise = Promise<any> & {
    cancel: () => void;
};
export declare function makeCancelable(promise: Promise<any>): CancelablePromise;
export declare function useCancelablePromise(): {
    cancelablePromise: (p: Promise<any>) => CancelablePromise;
};
