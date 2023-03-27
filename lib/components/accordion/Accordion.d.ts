import { ChangeEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface AccordionProps extends CommonProps {
    /** actionable components (ex: checkbox, button) that can be nested within the expanded Accordion component */
    actions?: ReactNode;
    /** The content for the Accordion.*/
    children: ReactNode;
    /** If true, the accordion will be displayed in a disabled state. */
    disabled?: boolean;
    /** If true, the accordion is expanded. */
    expanded?: boolean;
    /** If true, the Accordion will have elevation. */
    hasElevation?: boolean;
    /** If true, the text will wrap and not be truncated */
    noWrap?: boolean;
    /**
    Callback fired when the expand/collapse state is changed.
    If provided, the accordion will be a controlled component and it will be the responsibility of the consumer to manage the 'expanded' state.
    */
    onChange?: (event: ChangeEvent, expanded: boolean) => void;
    /** If true, rounded corners are disabled. */
    square?: boolean;
    /** Icon placed before the children. */
    startIcon?: ReactNode;
    /** The text within the expanded Accordion */
    summary: ReactNode | string;
}
export declare const DotAccordion: ({ actions, ariaLabel, children, className, "data-testid": dataTestId, disabled, expanded, hasElevation, onChange, square, startIcon, summary, noWrap, }: AccordionProps) => JSX.Element;
