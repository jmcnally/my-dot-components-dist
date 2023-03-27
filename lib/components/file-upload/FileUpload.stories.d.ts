import { ComponentMeta, Story } from '@storybook/react';
import { FileUploadProps } from './';
declare const _default: ComponentMeta<({ accept, ariaLabel, buttonOnly, className, "data-testid": dataTestId, disabled, hideFilesList, maxFiles, maxSize, onChange, onDragEnter, onFileClick, }: FileUploadProps) => JSX.Element>;
export default _default;
export declare const Default: Story<FileUploadProps>;
export declare const WithSingleFileLimit: Story<FileUploadProps>;
export declare const WithCustomFileUploadList: Story<FileUploadProps>;
export declare const WithUploadErrors: Story<FileUploadProps>;
