/// <reference types="react" />
import { CommonProps } from '../CommonProps';
import { MappedFile } from './utils/models';
import { ListItemFile } from './FileListItem';
export interface FileUploadProps extends CommonProps {
    /** Unique file type specifiers <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers" target="_blank">More Info</a> */
    accept?: Array<string>;
    /** If true, will only display the button */
    buttonOnly?: boolean;
    /** If true, the upload zone will be disabled */
    disabled?: boolean;
    /** If true, upload file list won't be displayed. Used when consumer wants to render his own list. */
    hideFilesList?: boolean;
    /** Defines the maximum number of files that can be uploaded */
    maxFiles?: number;
    /** Defines the maximum file size (in MB) */
    maxSize: number;
    /** callback triggered when files are added or removed */
    onChange: (files: Array<MappedFile>) => void;
    /** callback triggered when dragenter event occurs */
    onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
    /** Optional callback which gets triggered when the file (from the list) is clicked.  */
    onFileClick?: (file: ListItemFile) => void;
}
export declare const DotFileUpload: ({ accept, ariaLabel, buttonOnly, className, "data-testid": dataTestId, disabled, hideFilesList, maxFiles, maxSize, onChange, onDragEnter, onFileClick, }: FileUploadProps) => JSX.Element;
