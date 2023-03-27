import { Layout } from 'react-grid-layout';
import { DraggableItem } from './models';
export declare const getOrderedListItems: (layout: Layout[], listItems: DraggableItem[]) => DraggableItem[];
export declare const checkIfEqual: (oldList: DraggableItem[], newList: DraggableItem[]) => boolean;
export declare const getListItemLayout: (listItems: DraggableItem[]) => Layout[];
