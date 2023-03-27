import { FileWithPath } from 'react-dropzone';
import { ListItemFile } from '../FileListItem';
export interface FileUploadError {
    code: string;
    message: string;
}
export interface MappedListItemFile {
    errors: FileUploadError[];
    listItemFile: ListItemFile;
}
export interface MappedFile {
    errors: Array<FileUploadError>;
    file: FileWithPath;
}
export interface DropzoneContentArgs {
    buttonOnly: boolean;
    isDragActive: boolean;
    isUploadDisabled: boolean;
    open: () => void;
}
export interface UploadedFilesListArgs {
    maxSize: number;
    onFileClick?: (file: ListItemFile) => void;
    onFileDelete: (fileIndexToBeRemoved: number) => void;
    uploadedFiles: MappedFile[];
}
export interface ParseListItemArgs {
    fileToBeParsed: MappedFile;
    index: number;
    maxSize: number;
    onFileClick?: (file: ListItemFile) => void;
    onFileDelete: (fileIndexToBeRemoved: number) => void;
}
