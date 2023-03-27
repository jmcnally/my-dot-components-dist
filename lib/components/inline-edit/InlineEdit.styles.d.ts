import { TypographyVariant } from '../typography/Typography';
export declare const rootClassName = "dot-inline-edit";
export declare const editModeClassName = "dot-edit-mode";
export declare const viewModeClassName = "dot-view-mode";
export declare const readOnlyClassName = "dot-read-only";
export declare const editActionsClassName = "dot-edit-actions";
export declare const editTextFieldClassName = "dot-edit-text-field";
export interface StyledInlineEditProps {
    fullWidth: boolean;
    typography?: TypographyVariant;
}
export declare const StyledInlineEdit: import("styled-components").StyledComponent<"div", any, StyledInlineEditProps, never>;
