import { MenuItemProps } from '../menu/Menu';
import { BaseButtonProps } from '../BaseButtonProps';
export interface SplitButtonProps extends BaseButtonProps {
    /** accessibility label */
    ariaLabel: string;
    /** Key of the option which will be rendered as main option */
    defaultMainOptionKey?: string;
    /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
    disablePortal?: boolean;
    /** Callback function which executes when any option has been clicked */
    onOptionClick: (itemKey: string) => void;
    /**The options within the button dropdown */
    options: Array<MenuItemProps>;
}
export declare const DotSplitButton: ({ autoFocus, ariaLabel, className, "data-testid": dataTestId, defaultMainOptionKey, disabled, disablePortal, disableRipple, fullWidth, isSubmit, onOptionClick, options, size, tooltip, type, }: SplitButtonProps) => JSX.Element;
