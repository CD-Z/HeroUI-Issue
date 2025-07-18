import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

/**
 * Radio wrapper **Tailwind Variants** component
 *
 * const {base, wrapper, point, labelWrapper, label, description} = radio({...})
 *
 * @example
 * <label
 *    className={base())}
 *    data-selected={boolean}
 *    data-hover-unselected={boolean}
 *    data-focus-visible={boolean}
 * >
 *  // input
 *  <span className={wrapper()} aria-hidden="true" data-selected={selected} data-hover-unselected={hoverUnchecked}>
 *     <span className={point()}/>
 *  </span>
 *  <div className={labelWrapper()}>
 *    <span className={label()}>Label</span>
 *    <span className={description()}>Description</span>
 *  </div>
 * </label>
 */
declare const radio: tailwind_variants.TVReturnType<{
    color: {
        default: {
            control: string;
            wrapper: string;
        };
        primary: {
            control: string;
            wrapper: string;
        };
        secondary: {
            control: string;
            wrapper: string;
        };
        success: {
            control: string;
            wrapper: string;
        };
        warning: {
            control: string;
            wrapper: string;
        };
        danger: {
            control: string;
            wrapper: string;
        };
    };
    size: {
        sm: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
        md: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
        lg: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
    };
    isDisabled: {
        true: {
            base: string;
        };
    };
    isInvalid: {
        true: {
            control: string;
            wrapper: string;
            label: string;
            description: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {
            wrapper: string[];
            control: string;
            label: string;
            description: string;
        };
    };
}, {
    base: string;
    wrapper: string[];
    hiddenInput: string[];
    labelWrapper: string;
    control: string[];
    label: string;
    description: string;
}, undefined, {
    color: {
        default: {
            control: string;
            wrapper: string;
        };
        primary: {
            control: string;
            wrapper: string;
        };
        secondary: {
            control: string;
            wrapper: string;
        };
        success: {
            control: string;
            wrapper: string;
        };
        warning: {
            control: string;
            wrapper: string;
        };
        danger: {
            control: string;
            wrapper: string;
        };
    };
    size: {
        sm: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
        md: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
        lg: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
    };
    isDisabled: {
        true: {
            base: string;
        };
    };
    isInvalid: {
        true: {
            control: string;
            wrapper: string;
            label: string;
            description: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {
            wrapper: string[];
            control: string;
            label: string;
            description: string;
        };
    };
}, {
    base: string;
    wrapper: string[];
    hiddenInput: string[];
    labelWrapper: string;
    control: string[];
    label: string;
    description: string;
}, tailwind_variants.TVReturnType<{
    color: {
        default: {
            control: string;
            wrapper: string;
        };
        primary: {
            control: string;
            wrapper: string;
        };
        secondary: {
            control: string;
            wrapper: string;
        };
        success: {
            control: string;
            wrapper: string;
        };
        warning: {
            control: string;
            wrapper: string;
        };
        danger: {
            control: string;
            wrapper: string;
        };
    };
    size: {
        sm: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
        md: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
        lg: {
            wrapper: string;
            control: string;
            labelWrapper: string;
            label: string;
            description: string;
        };
    };
    isDisabled: {
        true: {
            base: string;
        };
    };
    isInvalid: {
        true: {
            control: string;
            wrapper: string;
            label: string;
            description: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {
            wrapper: string[];
            control: string;
            label: string;
            description: string;
        };
    };
}, {
    base: string;
    wrapper: string[];
    hiddenInput: string[];
    labelWrapper: string;
    control: string[];
    label: string;
    description: string;
}, undefined, unknown, unknown, undefined>>;
/**
 * RadioGroup wrapper **Tailwind Variants** component
 *
 * const {base, label, wrapper} = radioGroup({...})
 *
 * @example
 * <div className={base())}>
 *  <label className={label()}>Label</label>
 *  <div className={wrapper()} data-orientation="vertical/horizontal">
 *     // radios
 *  </div>
 * </div>
 */
declare const radioGroup: tailwind_variants.TVReturnType<{
    isRequired: {
        true: {
            label: string;
        };
    };
    isInvalid: {
        true: {
            description: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {
            description: string;
        };
    };
}, {
    base: string;
    label: string;
    wrapper: string;
    description: string;
    errorMessage: string;
}, undefined, {
    isRequired: {
        true: {
            label: string;
        };
    };
    isInvalid: {
        true: {
            description: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {
            description: string;
        };
    };
}, {
    base: string;
    label: string;
    wrapper: string;
    description: string;
    errorMessage: string;
}, tailwind_variants.TVReturnType<{
    isRequired: {
        true: {
            label: string;
        };
    };
    isInvalid: {
        true: {
            description: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {
            description: string;
        };
    };
}, {
    base: string;
    label: string;
    wrapper: string;
    description: string;
    errorMessage: string;
}, undefined, unknown, unknown, undefined>>;
type RadioGroupSlots = keyof ReturnType<typeof radioGroup>;
type RadioVariantProps = VariantProps<typeof radio>;
type RadioSlots = keyof ReturnType<typeof radio>;

export { type RadioGroupSlots, type RadioSlots, type RadioVariantProps, radio, radioGroup };
