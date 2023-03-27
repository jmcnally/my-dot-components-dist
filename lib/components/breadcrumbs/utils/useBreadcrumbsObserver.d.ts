import { MutableRefObject } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
interface BreadcrumbsObserverRefs {
    breadcrumbRef: MutableRefObject<HTMLElement>;
    firstItemRef: MutableRefObject<HTMLDivElement>;
    lastItemRef: MutableRefObject<HTMLSpanElement>;
}
export declare const useBreadcrumbsObserver: (items: Array<BreadcrumbItem>, maxItems?: number) => [BreadcrumbsObserverRefs, number];
export {};
