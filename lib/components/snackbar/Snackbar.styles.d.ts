import { Snackbar } from '@mui/material';
import { SnackbarSeverity } from './Snackbar';
export declare const rootClassName = "dot-snackbar";
interface StyledProps {
    severity: SnackbarSeverity;
}
export declare const StyledSnackbar: import("styled-components").StyledComponent<typeof Snackbar, any, StyledProps, never>;
export {};
