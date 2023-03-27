import { ChangeEvent } from 'react';
import { ActionItem, AutoCompleteOption, AutoCompleteProps, AutoCompleteValue } from './AutoComplete';
import { CommonProps } from '../CommonProps';
export declare const movies: {
    group: string;
    title: string;
    error: boolean;
}[];
export declare const handleActionItemClick: (newItem?: string) => void;
export declare const actionItemOptions: ActionItem[];
export declare const actionItemArgType: {
    options: string[];
    mapping: ActionItem[];
    control: {
        type: string;
        labels: {
            0: string;
            1: string;
            2: string;
        };
    };
    defaultValue: string;
};
export interface AutoCompleteWithRenderOption extends AutoCompleteOption {
    imageUrl: string;
    uid: number;
}
export declare const fullNameOptions: AutoCompleteWithRenderOption[];
export interface SelectedAutocompleteItemsProps extends CommonProps {
    onItemRemove: (optionTitle: string) => void;
    selectedOptions: AutoCompleteOption[];
}
export declare const SelectedAutocompleteItems: ({ className, onItemRemove, selectedOptions, }: SelectedAutocompleteItemsProps) => JSX.Element;
export interface AutocompleteWithoutChipsProps extends CommonProps {
    onChange: (event: ChangeEvent, currentlySelectedOptions: AutoCompleteValue) => void;
    onItemRemove: (optionTitle: string) => void;
    selectedOptions: AutoCompleteOption[];
    storyArgs: AutoCompleteProps;
}
export declare const AutocompleteWithoutChips: ({ className, onChange, onItemRemove, selectedOptions, storyArgs, }: AutocompleteWithoutChipsProps) => JSX.Element;
export interface AutocompleteWithNullValueProps {
    storyArgs: AutoCompleteProps;
}
export declare const AutocompleteWithNullValue: ({ storyArgs, }: AutocompleteWithNullValueProps) => JSX.Element;
