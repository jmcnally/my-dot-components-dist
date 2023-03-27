import { ButtonToggleValue } from '../button-toggle';
export interface FlagTaskProps {
    onChange: (optionValue: ButtonToggleValue) => void;
}
export declare const FlagTask: ({ onChange }: FlagTaskProps) => JSX.Element;
