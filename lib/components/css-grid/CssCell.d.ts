/// <reference types="react" />
import { CommonProps } from '../CommonProps';
export interface CellSize {
    span?: number;
    start?: number;
}
export declare type Placement = 'center' | 'flex-end' | 'space-between' | 'space-around' | 'stretch' | 'flex-start';
export interface CssCellProps extends CommonProps {
    /** Flexbox align-items for the cell wrapper div */
    alignItems?: Placement;
    /** Shorthand for grid-row-start / grid-column-start / grid-row-end, grid-column-end */
    area?: string;
    /** Text align center */
    center?: boolean;
    /** Cell content */
    children?: React.ReactNode | Array<React.ReactNode>;
    /** Shorthand for grid-column-start / grid-column-end */
    gridColumn?: string;
    /** Cell height */
    height?: number | string;
    /** Flexbox justify-content for the cell wrapper div */
    justifyContent?: Placement;
    /** Large column breakpoint */
    lg?: CellSize;
    /** Large column breakpoint */
    md?: CellSize;
    /** Center align vertically and horizontally with flex, used by default */
    middle?: boolean;
    /** Small column breakpoint */
    sm?: CellSize;
    /** Column start when Cell column breakpoints are not used */
    start?: number | string;
    /** Row start override */
    top?: number | string;
    width?: number;
    /** Extra large column breakpoint */
    xl?: CellSize;
    /** Extra small column breakpoint */
    xs?: CellSize;
}
export declare const Cell: ({ children, className }: CssCellProps) => JSX.Element;
export declare const CssCell: import("styled-components").StyledComponent<({ children, className }: CssCellProps) => JSX.Element, any, {}, never>;
