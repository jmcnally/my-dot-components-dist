import { MutableRefObject } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
export interface MaxVisibleItems {
    lastRemovedItemWidth?: number;
    maxVisibleItems: number;
}
interface BreadcrumbsResizerRefs {
    firstItemRef: MutableRefObject<HTMLDivElement>;
    lastItemRef: MutableRefObject<HTMLSpanElement>;
}
interface BreadcrumbItemsProps {
    items: Array<BreadcrumbItem>;
    maxItems?: number;
}
export declare const MIN_AVAILABLE_SPACE = 60;
export declare const ITEMS_SEPARATOR_SPACE = 20;
export declare const useBreadcrumbsResizer: (breadcrumbsRightCoord: number, breadcrumbItemsProps: BreadcrumbItemsProps, refs: BreadcrumbsResizerRefs) => [MaxVisibleItems];
export {};
