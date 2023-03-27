import { FileUploadProps, MappedListItemFile } from './';
export interface CustomFileUploadArgs {
    alreadyUploadedFiles?: MappedListItemFile[];
    args: FileUploadProps;
}
export declare const CustomFileUpload: ({ args, alreadyUploadedFiles, }: CustomFileUploadArgs) => JSX.Element;
