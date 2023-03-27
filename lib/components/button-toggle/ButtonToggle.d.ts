import { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { ButtonToggleOption, ButtonToggleOrientation, ButtonToggleSize, ButtonToggleValue } from './utils/models';
export declare type ButtonToggleColor = 'standard' | 'primary';
export interface ButtonToggleProps extends CommonProps {
    /** button props for each toggle button options*/
    buttonOptions: ButtonToggleOption[];
    color?: ButtonToggleColor;
    /** If true, the keyboard focus ripple will be disabled */
    disableFocusRipple?: boolean;
    /** If true, the ripple effect will be disabled. */
    disableRipple?: boolean;
    /** If true, only allow one of the values to be selected. */
    exclusive?: boolean;
    /** callback function that is executed when the value changes */
    onChange: (event: MouseEvent, value: ButtonToggleValue) => void;
    /** The group orientation (layout flow direction)*/
    orientation?: ButtonToggleOrientation;
    /** The size of the buttons.*/
    size?: ButtonToggleSize;
    /** The value to associate with the button when selected in a ToggleButtonGroup */
    value?: ButtonToggleValue;
}
export declare const DotButtonToggle: ({ ariaLabel, buttonOptions, className, color, "data-testid": dataTestId, disableFocusRipple, disableRipple, exclusive, onChange, orientation, size, value, }: ButtonToggleProps) => JSX.Element;
