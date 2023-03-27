import { ReactNode } from 'react';
import { InlineEditBinding } from './models';
export declare const getCounterAdornment: (currentLength: number, maxLength: number, dataTestId?: string) => ReactNode | undefined;
export declare const getWarningAdornment: () => JSX.Element;
export declare const applyBindings: (bindings: InlineEditBinding[], inlineEditText: string) => ReactNode;
export declare const checkIfEmptyValue: (inputValue: string) => boolean;
