import { CommonProps } from '../CommonProps';
import { AvatarProps } from '../avatar/Avatar';
export declare type AvatarGroupSpacing = 'medium' | 'small' | number;
export interface AvatarGroupProps extends CommonProps {
    /** Array of avatars displayed inside the group */
    avatars: Array<AvatarProps>;
    /** Max avatars to show before +x */
    max?: number;
    /** Spacing between avatars */
    spacing?: AvatarGroupSpacing;
}
export declare const DotAvatarGroup: ({ ariaLabel, avatars, className, "data-testid": dataTestId, max, spacing, }: AvatarGroupProps) => JSX.Element;
