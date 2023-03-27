import { CommonProps } from '../CommonProps';
import { DraggableItem, DraggableListChangeHandler } from './utils/models';
export declare const DEFAULT_LIST_WIDTH = "100%";
export declare const DEFAULT_LIST_ITEM_HEIGHT = 36;
export interface DraggableListProps extends CommonProps {
    /** If true, component will prevent items to be dragged. */
    disableDrag?: boolean;
    /**
     * A CSS selector for tags that will act as the draggable handle.
     * For example: `draggableHandle: '.MyDragHandleClassName'`
     * If you forget the leading . it will not work.
     */
    draggableHandle?: string;
    /** Array of draggable list items displayed */
    items: DraggableItem[];
    /** Callback function which gets executed when the list changes */
    onChange?: DraggableListChangeHandler;
    /** Height of the list item in pixels, defaults to 36px */
    rowHeight?: number;
    /** Width of the draggable list, defaults to '100%' */
    width?: number | string;
}
export declare const DotDraggableList: ({ ariaLabel, className, "data-testid": dataTestId, disableDrag, draggableHandle, items, onChange, rowHeight, width, }: DraggableListProps) => JSX.Element;
