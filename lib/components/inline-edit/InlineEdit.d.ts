import { CommonProps } from '../CommonProps';
import { TypographyVariant } from '../typography/Typography';
import { CharactersLimit, InlineEditBinding } from './utils/models';
export interface InlineEditProps extends CommonProps {
    /** Optional array of bindings, used to replace targeted string in edit mode with the corresponding value in view mode */
    bindings?: InlineEditBinding[];
    /** Characters limit configuration object */
    charactersLimit?: CharactersLimit;
    /** If true, the input will take up the full width of its container */
    fullWidth?: boolean;
    /** If true, `Cancel` and `Save` buttons will be hidden */
    hideActionButtons?: boolean;
    /** The name of input element */
    name: string;
    /** An async function which should be executed when the value of the input changes */
    onChange?: (value: string) => Promise<boolean>;
    /** A function that informs the parent of current editing state */
    onEditStateChange?: (editing: boolean) => void;
    /** If true, component will behave like a regular text (editing functionality will be disabled). */
    readOnly?: boolean;
    /** If true, when starting edit it will select all text in the input */
    selectTextOnEdit?: boolean;
    /** tab order for the inline edit */
    tabIndex?: number;
    /** Tooltip text displayed on hover */
    tooltip?: string;
    /** Typography variant to be used */
    typography?: TypographyVariant;
    /** default value that is displayed on load */
    value?: string;
}
/**
 * @experimental This component is still in development
 */
export declare const DotInlineEdit: ({ ariaLabel, bindings, charactersLimit, className, "data-testid": dataTestId, fullWidth, hideActionButtons, name, onChange, onEditStateChange, readOnly, selectTextOnEdit, tabIndex, tooltip, typography, value, }: InlineEditProps) => JSX.Element;
