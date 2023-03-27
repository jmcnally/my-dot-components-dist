import { ListItemProps } from '@mui/material';
export interface DraggableItem extends ListItemProps {
    id: string;
}
export declare type DraggableListChangeHandler = (listItems: DraggableItem[]) => void;
