import { DraggableItem } from './';
export interface DraggableListWithAvatarArgs {
    primaryText: string;
    secondaryText: string;
}
export interface DraggableListWithIconsArgs {
    text: string;
}
export interface DraggableListWithHandleArgs extends DraggableListWithIconsArgs {
    id: string;
}
export declare const DraggableListWithAvatar: ({ primaryText, secondaryText, }: DraggableListWithAvatarArgs) => JSX.Element;
export declare const DraggableListWithIcons: ({ text, }: DraggableListWithIconsArgs) => JSX.Element;
export declare const DraggableListWithHandle: ({ id, text, }: DraggableListWithHandleArgs) => JSX.Element;
export declare const draggableListItems: DraggableItem[];
export declare const draggableListWithAvatar: DraggableItem[];
export declare const draggableListWithIcons: DraggableItem[];
export declare const draggableListWithHandle: DraggableItem[];
