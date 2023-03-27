import { MutableRefObject, ReactElement } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
export interface BreadcrumbItemRefs {
    firstItemRef: MutableRefObject<HTMLDivElement>;
    lastItemRef: MutableRefObject<HTMLSpanElement>;
}
export interface BreadcrumbItemsConfig {
    isLastItemFullyVisible: boolean;
    itemsAfterCollapse: number;
}
export declare const getItemsAfterCollapse: (adjustMaxItems: boolean, visibleItemsNumber: number, maxItems?: number) => number | undefined;
export declare const getMaxItems: (adjustMaxItems: boolean, visibleItemsNumber: number, maxItems?: number) => number | undefined;
export declare const getWidthFromRef: <T extends HTMLElement>(ref: MutableRefObject<T>) => number | undefined;
export declare const checkIfFirstItemAfterCollapse: (currentIndex: number, items: BreadcrumbItem[], itemsAfterCollapse: number) => boolean;
export declare const getExpandElement: (breadcrumbElement: HTMLElement) => Element;
export declare const getInitialMaxVisibleItems: (items: BreadcrumbItem[], maxItems?: number) => number;
export declare const getMenuItems: (items: BreadcrumbItem[], itemsAfterCollapse: number) => {
    children: JSX.Element;
    key: string;
}[];
export declare const addListenersToMenu: (expandElement: Element, eventListener: EventListener) => void;
export declare const removeListenersFromMenu: (expandElement: Element, eventListener: EventListener) => void;
export declare const getLastItemElement: ({ ariaLabel, text }: BreadcrumbItem, lastItemRef: MutableRefObject<HTMLSpanElement>, index?: number) => ReactElement;
export declare const mapBreadcrumbItems: (items: BreadcrumbItem[], refs: BreadcrumbItemRefs, { isLastItemFullyVisible, itemsAfterCollapse }: BreadcrumbItemsConfig) => JSX.Element[];
export declare const checkIfLastItemFullyVisible: (breadcrumbRef: MutableRefObject<HTMLElement>, lastItemRef: MutableRefObject<HTMLSpanElement>) => boolean;
