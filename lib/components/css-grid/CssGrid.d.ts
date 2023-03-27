import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface GridOptions {
    lg: number;
    md: number;
    sm: number;
    xl: number;
    xs: number;
}
export interface CssGridProps extends CommonProps {
    /** Cells for Grid */
    children?: ReactNode | ReactNode[];
    /** Columns gap */
    columnGap?: GridOptions;
    /** Columns, overrides columnsBreakpoints */
    columns?: number | string;
    /** Breakpoints for columns */
    columnsBreakpoints?: GridOptions;
    /** Overall gap column and row */
    gap?: string;
    /** Template to create layout */
    gridTemplateAreas?: string;
    /** Height of the grid */
    height?: string;
    /** Row, overrides columnsBreakpoints */
    rowGap?: GridOptions;
    /** Row, configuration */
    rows?: number | string;
    /** Width of the grid */
    width?: string;
}
export declare const rootClassName = "dot-grid";
export declare const defaultGutter: GridOptions;
export declare const defaultColumns: GridOptions;
export declare const Grid: ({ className, children }: CssGridProps) => JSX.Element;
export declare const StyledGrid: import("styled-components").StyledComponent<({ className, children }: CssGridProps) => JSX.Element, any, {}, never>;
export declare const CssGrid: (props: CssGridProps) => JSX.Element;
