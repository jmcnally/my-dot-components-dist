import { CommonProps } from '../CommonProps';
export interface CopyButtonProps extends CommonProps {
    copiedTooltip?: string;
    copyTooltip?: string;
    value: string;
}
export declare const DotCopyButton: ({ ariaLabel, copiedTooltip, copyTooltip, "data-testid": dataTestId, value, }: CopyButtonProps) => JSX.Element;
