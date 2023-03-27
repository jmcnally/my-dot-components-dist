import { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
export interface AppLogoProps extends CommonProps {
    /** If provided will display application logo */
    appLogo?: ReactNode;
    /** If provided will display application logo */
    appLogoSmall?: ReactNode;
    /** If true will force the small logo only */
    smallOnly?: boolean;
}
export declare const DotAppLogo: ({ appLogo, appLogoSmall, ariaLabel, className, "data-testid": dataTestId, smallOnly, }: AppLogoProps) => JSX.Element;
