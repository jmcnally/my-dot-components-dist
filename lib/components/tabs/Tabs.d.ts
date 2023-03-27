import { CommonProps } from '../CommonProps';
export declare type TabsColor = 'primary' | 'secondary';
export declare type TabsScrollButtons = 'auto' | boolean;
export declare type TabsVariant = 'fullWidth' | 'scrollable' | 'standard';
export interface TabProps extends CommonProps {
    /** If true, the tab will be disabled. */
    disabled?: boolean;
    /** The ID of the icon to display on the tab */
    iconId?: string;
    /** The text to display on the tab */
    label: string;
    /** The value of the Tab (defaults to tab index) */
    value?: any;
}
export interface TabsProps extends CommonProps {
    /** Center the tabs */
    centered?: boolean;
    /** The color of the tabs */
    color?: TabsColor;
    /** The value of the initially selected tab */
    initialValue?: any;
    /** Tab change callback */
    onChange?: (value: any) => void;
    /** Determines behavior of scroll buttons when tabs are scrollable (variant="scrollable") */
    scrollButtons?: TabsScrollButtons;
    /** Array of tabs to be displayed */
    tabs: Array<TabProps>;
    /** Determines additional display behavior of the tabs */
    variant?: TabsVariant;
}
export declare const DotTabs: ({ centered, className, color, "data-testid": dataTestId, initialValue, onChange, scrollButtons, tabs, variant, }: TabsProps) => JSX.Element;
