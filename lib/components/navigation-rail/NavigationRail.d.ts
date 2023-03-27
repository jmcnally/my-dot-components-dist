import { CommonProps } from '../CommonProps';
import { BadgeProps } from '../badge';
export declare type RailItemsPosition = 'flex-start' | 'center' | 'flex-end';
export declare type RailIconBadge = Omit<BadgeProps, 'children'>;
export interface RailItem {
    /** Defines a string value that labels the current element **/
    ariaLabel?: string;
    /** Optional badge which will be displayed over an icon **/
    iconBadge?: RailIconBadge;
    /** Id of the icon shown in the rail item */
    iconId: string;
    /** text displayed or title text if icon used */
    title: string;
}
export interface NavigationRailProps extends CommonProps {
    /** onChange callback */
    onChange?: (index: number) => void;
    /** controls the position of the rail items */
    railItemPosition?: RailItemsPosition;
    /** list of rail items */
    railItems: Array<RailItem>;
    /** index of selected rail item */
    selectedIndex?: number;
}
export declare const DotNavigationRail: ({ ariaLabel, className, "data-testid": dataTestId, onChange, railItemPosition, railItems, selectedIndex, }: NavigationRailProps) => JSX.Element;
