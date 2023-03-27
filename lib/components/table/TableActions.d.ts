import { CommonProps } from '../CommonProps';
import { TableActionProps } from './TableAction';
export interface TableActionsProps extends CommonProps {
    actions?: Array<TableActionProps>;
    id: string;
}
export declare const DotTableActions: ({ actions, id }: TableActionsProps) => JSX.Element;
