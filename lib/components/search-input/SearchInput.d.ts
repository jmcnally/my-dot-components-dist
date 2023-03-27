import { CommonProps } from '../CommonProps';
export interface SearchInputProps extends CommonProps {
    autoFocus?: boolean;
    disabled?: boolean;
    onChange?: (searchText: string) => void;
    onClear?: () => void;
    placeholder?: string;
    tooltip?: string;
    value: string;
}
export declare function SearchInput({ 'data-testid': dataTestId, autoFocus, className, disabled, onChange, onClear, placeholder, tooltip, value, }: SearchInputProps): JSX.Element;
