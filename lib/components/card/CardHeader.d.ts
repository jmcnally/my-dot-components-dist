import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export declare type TitleSize = 'small' | 'medium' | 'large';
export declare type SubheaderSize = 'small' | 'large';
export interface CardHeaderProps extends CommonProps {
    /** Card header action */
    action?: ReactNode;
    /** Card header avatar */
    avatar?: ReactNode;
    /** Card subheader */
    subheader?: string;
    /** Card subheader size */
    subheaderSize?: SubheaderSize;
    /** Card title */
    title?: string;
    /** Card title size */
    titleSize?: TitleSize;
}
export declare const DotCardHeader: ({ action, ariaLabel, avatar, className, "data-testid": dataTestId, subheader, subheaderSize, title, titleSize, }: CardHeaderProps) => JSX.Element;
