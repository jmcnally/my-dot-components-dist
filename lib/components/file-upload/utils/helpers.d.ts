import React, { ReactNode } from 'react';
import { FileRejection } from 'react-dropzone';
import { DropzoneContentArgs, FileUploadError, ParseListItemArgs, UploadedFilesListArgs } from './models';
export declare const renderMaxSizeMessage: (maxSizeMB: number) => ReactNode;
export declare const renderMaxFilesMessage: (maxFiles: number, maxFilesClasses: string) => ReactNode;
export declare const renderSelectFilesButton: (isUploadDisabled: boolean, onButtonClick: () => void) => ReactNode;
export declare const renderActiveDragArea: () => ReactNode;
export declare const renderDragAndDropArea: (isUploadDisabled: boolean, onSelectButtonClick: () => void) => ReactNode;
export declare const renderDropzoneContent: ({ buttonOnly, isDragActive, isUploadDisabled, open, }: DropzoneContentArgs) => React.ReactNode;
export declare const getUploadedFilesList: ({ maxSize, onFileClick, onFileDelete, uploadedFiles, }: UploadedFilesListArgs) => {
    child: JSX.Element;
}[];
export declare const parseListItem: ({ onFileDelete, onFileClick, fileToBeParsed, index, maxSize, }: ParseListItemArgs) => {
    child: JSX.Element;
};
export declare const mapAcceptedFiles: (files: File[]) => {
    file: File;
    errors: any[];
}[];
export declare const joinAcceptedAndRejectedFiles: (filesAccepted: File[], filesRejected: FileRejection[]) => {
    file: File;
    errors: any[];
}[];
export declare const getErrorMessagesForDisplay: (errors: FileUploadError[]) => string;
