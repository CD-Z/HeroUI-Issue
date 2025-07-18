import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

declare const inputOtp: tailwind_variants.TVReturnType<{
    variant: {
        flat: {
            segment: string[];
        };
        faded: {
            segment: string[];
        };
        bordered: {
            segment: string[];
        };
        underlined: {
            segment: string[];
        };
    };
    isDisabled: {
        true: {
            segment: string;
            input: string;
        };
    };
    isInvalid: {
        true: {};
    };
    isReadOnly: {
        true: {
            caret: string;
            segment: string;
        };
    };
    fullWidth: {
        true: {
            base: string;
        };
    };
    radius: {
        none: {
            segment: string;
        };
        sm: {
            segment: string;
        };
        md: {
            segment: string;
        };
        lg: {
            segment: string;
        };
        full: {
            segment: string;
        };
    };
    color: {
        default: {};
        primary: {};
        secondary: {};
        success: {};
        warning: {};
        danger: {};
    };
    size: {
        sm: {
            segment: string;
        };
        md: {
            segment: string;
        };
        lg: {
            segment: string;
        };
    };
    disableAnimation: {
        true: {
            segment: string;
            caret: string;
        };
        false: {
            segment: string;
        };
    };
}, {
    base: string[];
    wrapper: string[];
    input: string[];
    segmentWrapper: string[];
    segment: string[];
    passwordChar: string[];
    caret: string[];
    helperWrapper: string[];
    errorMessage: string[];
    description: string[];
}, undefined, {
    variant: {
        flat: {
            segment: string[];
        };
        faded: {
            segment: string[];
        };
        bordered: {
            segment: string[];
        };
        underlined: {
            segment: string[];
        };
    };
    isDisabled: {
        true: {
            segment: string;
            input: string;
        };
    };
    isInvalid: {
        true: {};
    };
    isReadOnly: {
        true: {
            caret: string;
            segment: string;
        };
    };
    fullWidth: {
        true: {
            base: string;
        };
    };
    radius: {
        none: {
            segment: string;
        };
        sm: {
            segment: string;
        };
        md: {
            segment: string;
        };
        lg: {
            segment: string;
        };
        full: {
            segment: string;
        };
    };
    color: {
        default: {};
        primary: {};
        secondary: {};
        success: {};
        warning: {};
        danger: {};
    };
    size: {
        sm: {
            segment: string;
        };
        md: {
            segment: string;
        };
        lg: {
            segment: string;
        };
    };
    disableAnimation: {
        true: {
            segment: string;
            caret: string;
        };
        false: {
            segment: string;
        };
    };
}, {
    base: string[];
    wrapper: string[];
    input: string[];
    segmentWrapper: string[];
    segment: string[];
    passwordChar: string[];
    caret: string[];
    helperWrapper: string[];
    errorMessage: string[];
    description: string[];
}, tailwind_variants.TVReturnType<{
    variant: {
        flat: {
            segment: string[];
        };
        faded: {
            segment: string[];
        };
        bordered: {
            segment: string[];
        };
        underlined: {
            segment: string[];
        };
    };
    isDisabled: {
        true: {
            segment: string;
            input: string;
        };
    };
    isInvalid: {
        true: {};
    };
    isReadOnly: {
        true: {
            caret: string;
            segment: string;
        };
    };
    fullWidth: {
        true: {
            base: string;
        };
    };
    radius: {
        none: {
            segment: string;
        };
        sm: {
            segment: string;
        };
        md: {
            segment: string;
        };
        lg: {
            segment: string;
        };
        full: {
            segment: string;
        };
    };
    color: {
        default: {};
        primary: {};
        secondary: {};
        success: {};
        warning: {};
        danger: {};
    };
    size: {
        sm: {
            segment: string;
        };
        md: {
            segment: string;
        };
        lg: {
            segment: string;
        };
    };
    disableAnimation: {
        true: {
            segment: string;
            caret: string;
        };
        false: {
            segment: string;
        };
    };
}, {
    base: string[];
    wrapper: string[];
    input: string[];
    segmentWrapper: string[];
    segment: string[];
    passwordChar: string[];
    caret: string[];
    helperWrapper: string[];
    errorMessage: string[];
    description: string[];
}, undefined, unknown, unknown, undefined>>;
type InputOtpVariantProps = VariantProps<typeof inputOtp>;
type InputOtpSlots = keyof ReturnType<typeof inputOtp>;
type InputOtpReturnType = ReturnType<typeof inputOtp>;

export { type InputOtpReturnType, type InputOtpSlots, type InputOtpVariantProps, inputOtp };
