import { CommonProps } from '../CommonProps';
export declare type DividerOrientation = 'horizontal' | 'vertical';
export declare type DividerVariant = 'fullWidth' | 'inset' | 'middle';
export interface DividerProps extends CommonProps {
    /** Absolutely position the element. Default value: `false` */
    absolute?: boolean;
    /** If true, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.) */
    flexItem?: boolean;
    /** If `true`, the divider will have a lighter color. Default value: `false` */
    light?: boolean;
    /** The divider orientation. (`horizontal`, `vertical`). Default value: `horizontal` */
    orientation?: DividerOrientation;
    /** The variant to use. (`fullWidth`, `inset`, `middle`) */
    variant?: DividerVariant;
}
export declare const DotDivider: ({ absolute, ariaLabel, className, "data-testid": dataTestId, flexItem, light, orientation, variant, }: DividerProps) => JSX.Element;
