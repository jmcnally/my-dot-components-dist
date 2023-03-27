import { KeyboardEvent, MouseEvent } from 'react';
export interface PopperTestWrapperProps {
    dataTestId?: string;
    disablePortal?: boolean;
    onClickAway?: (event: KeyboardEvent | MouseEvent<Document>) => void;
}
export declare const PopperTestWrapper: (props: PopperTestWrapperProps) => JSX.Element;
