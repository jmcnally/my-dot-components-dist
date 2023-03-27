import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { PopperPlacementType } from '@mui/material';
import { CommonProps } from '../CommonProps';
export interface PopperProps extends CommonProps {
    /** Element that popper is attached to */
    anchorEl?: Element;
    /** The content of the component */
    children: ReactNode;
    /** Disable the portal behavior. If `true`, children stay within parent DOM hierarchy. */
    disablePortal?: boolean;
    /** Event callback when leaving popper by clicking away */
    onClickAway?: (event: KeyboardEvent | MouseEvent<Document>) => void;
    /** If `true`, the popper is visible. */
    open: boolean;
    /** Popper placement. */
    placement?: PopperPlacementType;
}
export declare const DotPopper: ({ ariaLabel, anchorEl, children, className, "data-testid": dataTestId, disablePortal, onClickAway, open, placement, }: PopperProps) => JSX.Element;
