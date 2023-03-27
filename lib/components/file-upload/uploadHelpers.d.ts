import { FileWithPath } from 'react-dropzone';
export interface MappedFile {
    errors: Array<FileUploadError>;
    file: FileWithPath;
}
export interface FileUploadError {
    code: string;
    message: string;
}
export declare const parseListItem: (deleteFile: (file: FileWithPath) => void, fileToBeParsed: MappedFile, maxSize: number) => {
    child: JSX.Element;
};
