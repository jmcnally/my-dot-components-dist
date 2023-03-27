import { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
export interface TableActionProps extends CommonProps {
    disabled?: boolean;
    iconId: string;
    id?: string;
    label: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    tooltip?: string;
}
export declare const getMenuItem: (action: TableActionProps) => JSX.Element;
export declare const DotTableAction: ({ "data-testid": dataTestId, disabled, iconId, onClick, tooltip, }: TableActionProps) => JSX.Element;
