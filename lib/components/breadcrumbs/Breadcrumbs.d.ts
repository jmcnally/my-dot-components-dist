/// <reference types="react" />
import { CommonProps } from '../CommonProps';
import { LinkUnderline } from '../link/Link';
export declare type BreadcrumbItem = {
    /** Defines a string value that labels the current element **/
    ariaLabel?: string;
    /** If the number of characters is exceeded then an ellipsis should be used to truncate the text  */
    characterLimit?: number;
    /** link the breadcrumb goes to */
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** text displayed */
    text: string;
    /** determines if and when the underline will be shown */
    underline?: LinkUnderline;
};
export interface BreadcrumbProps extends CommonProps {
    /** determines if the menu expands on click */
    expansionMenu?: boolean;
    /** array of breadcrumb items to display */
    items: Array<BreadcrumbItem>;
    /** determines the maximum number of items to display */
    maxItems?: number;
}
export declare const DotBreadcrumbs: ({ className, "data-testid": dataTestId, expansionMenu, items, maxItems, }: BreadcrumbProps) => JSX.Element;
