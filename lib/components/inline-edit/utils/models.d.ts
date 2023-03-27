export interface CharactersLimit {
    /** If true, character limiter will be hidden. It is displayed by default. */
    hideCounter?: boolean;
    maxLength: number;
}
export interface InlineEditBinding {
    /** String, written in edit mode, which will be bound to the actual value in view mode */
    binding: string;
    /** Optional prop used to define custom CSS for the value when in view mode */
    className?: string;
    /** Value which will be displayed in view mode */
    value: string;
}
