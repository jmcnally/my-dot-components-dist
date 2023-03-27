import { AutocompleteGetTagProps } from '@mui/material';
import { ChipSize } from '../../chip/Chip';
import { AutoCompleteOption, AutoCompleteValue } from '../AutoComplete';
export declare const parseAutoCompleteValue: (value: AutoCompleteValue) => string;
export interface GetChipsFromAutocompleteProps {
    chipSize?: ChipSize;
    getTagProps: AutocompleteGetTagProps;
    isReadOnly?: boolean;
    values: Array<AutoCompleteOption | string>;
}
export declare const getChipsFromAutocomplete: ({ chipSize, getTagProps, isReadOnly, values, }: GetChipsFromAutocompleteProps) => JSX.Element[];
export declare const checkIfDuplicateItem: (itemText: string, autocompleteOptions: AutoCompleteOption[]) => boolean;
