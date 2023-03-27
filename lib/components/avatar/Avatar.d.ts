import { MouseEvent, CSSProperties } from 'react';
import { CommonProps } from '../CommonProps';
export declare type AvatarSize = 'small' | 'medium' | 'large';
export declare type AvatarType = 'image' | 'text' | 'icon';
export declare type AvatarVariant = 'circular' | 'square';
export declare type AvatarColor = 'default' | 'green' | 'blue' | 'orange' | 'purple' | 'yellow' | 'red' | 'darkGrey' | 'lightGrey' | 'transparent';
export interface AvatarProps extends CommonProps {
    /** Text displayed on hover */
    alt: string;
    /** Color for avatar */
    color?: AvatarColor;
    /** Used for the root node; button is used when onClick is passed. */
    component?: string;
    /** The ID of the icon to display on the avatar */
    iconId?: string;
    /** Source for the image used for the avatar */
    imageSrc?: string;
    /** Event callback */
    onClick?: (event: MouseEvent) => void;
    /** Size of avatar displayed */
    size?: AvatarSize;
    /** To be used to override styles inline */
    style?: CSSProperties;
    /** tab order for the avatar */
    tabIndex?: number;
    /** The text to be displayed. Only the first 2 letters will be displayed. */
    text?: string;
    /** Tooltip for avatar */
    tooltip?: string;
    /** The type of the avatar */
    type?: AvatarType;
    /** The shape of the avatar */
    variant?: AvatarVariant;
}
export declare const DotAvatar: ({ alt, ariaLabel, className, component, color, "data-testid": dataTestId, iconId, imageSrc, onClick, size, tabIndex, text, type, tooltip, variant, style, }: AvatarProps) => JSX.Element;
