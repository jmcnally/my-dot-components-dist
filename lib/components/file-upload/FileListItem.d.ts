import { KeyboardEvent } from 'react';
import { CommonProps } from '../CommonProps';
export interface ListItemFile {
    id: string | number;
    path: string;
}
export interface FileItemProps extends CommonProps {
    deleteFile: (fileIndex: string | number) => void;
    disableDelete?: boolean;
    error?: boolean;
    errorText?: string;
    file: ListItemFile;
    onClick?: (file: ListItemFile) => void;
    onKeyPress?: (event: KeyboardEvent<Element>) => void;
    tabIndex?: number;
}
export declare const DotFileListItem: ({ ariaLabel, className, "data-testid": dataTestId, deleteFile, disableDelete, error, errorText, file, onClick, onKeyPress, tabIndex, }: FileItemProps) => JSX.Element;
