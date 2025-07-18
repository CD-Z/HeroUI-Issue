import * as tailwind_merge from 'tailwind-merge';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

/**
 * Dropdown wrapper **Tailwind Variants** component
 *
 * const { base, menu } = dropdown({...})
 *
 * @example
 * <div>
 *  <button className={trigger()} aria-expanded="true/false">your trigger</button>
 *  <div className={base()}>
 *    // dropdown content
 *    <span className={arrow()} data-placement="top/bottom/left/right..." /> // arrow
 *  </div>
 * </div>
 */
declare const dropdown: tailwind_variants.TVReturnType<{} | {} | {}, undefined, string[], {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, string[], unknown, unknown, undefined>>;
/**
 * DropdownItem wrapper **Tailwind Variants** component
 *
 * const {base, heading, indicator, trigger, leftIndicator, title, subtitle, content } = dropdownItem({...})
 *
 * @example
 * <div className={base())} data-focus-visible={boolean} data-hover={boolean}>
 *   <div className={heading())}>
 *    <button className={trigger())}>
 *      <div className={leftIndicator()}>
 *         // content
 *      </div>
 *      <div className={titleWrapper()}>
 *        <h3 className={title())}>Title</h3>
 *        <span className={subtitle())}>Subtitle</span>
 *      </div>
 *      <span className={indicator())}>Indicator</span>
 *    </button>
 *  </div>
 *  <div className={content())}>Content</div>
 * </div>
 */
declare const dropdownItem: tailwind_variants.TVReturnType<{
    variant: {
        solid: {
            base: string;
        };
        bordered: {
            base: string;
        };
        light: {
            base: string;
        };
        faded: {
            base: string;
        };
        flat: {
            base: string;
        };
        shadow: {
            base: string;
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
    isDisabled: {
        true: {
            base: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {};
    };
}, {
    base: string[];
    wrapper: string;
    title: string;
    description: string[];
    selectedIcon: string[];
    shortcut: string[];
}, undefined, {
    variant: {
        solid: {
            base: string;
        };
        bordered: {
            base: string;
        };
        light: {
            base: string;
        };
        faded: {
            base: string;
        };
        flat: {
            base: string;
        };
        shadow: {
            base: string;
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
    isDisabled: {
        true: {
            base: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {};
    };
}, {
    base: string[];
    wrapper: string;
    title: string;
    description: string[];
    selectedIcon: string[];
    shortcut: string[];
}, tailwind_variants.TVReturnType<{
    variant: {
        solid: {
            base: string;
        };
        bordered: {
            base: string;
        };
        light: {
            base: string;
        };
        faded: {
            base: string;
        };
        flat: {
            base: string;
        };
        shadow: {
            base: string;
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
    isDisabled: {
        true: {
            base: string;
        };
    };
    disableAnimation: {
        true: {};
        false: {};
    };
}, {
    base: string[];
    wrapper: string;
    title: string;
    description: string[];
    selectedIcon: string[];
    shortcut: string[];
}, undefined, unknown, unknown, undefined>>;
/**
 * Dropdown wrapper **Tailwind Variants** component
 *
 * const { base, section, heading } = dropdownSection({...})
 *
 * @example
 * <div className={base()}>
 *  <button className={trigger()} aria-expanded="true/false">your trigger</button>
 *  <div className={section()}>
 *    // dropdown content
 *    <span className={arrow()} data-placement="top/bottom/left/right..." /> // arrow
 *  </div>
 * </div>
 */
declare const dropdownSection: tailwind_variants.TVReturnType<{
    [key: string]: {
        [key: string]: tailwind_merge.ClassNameValue | {
            divider?: tailwind_merge.ClassNameValue;
            base?: tailwind_merge.ClassNameValue;
            group?: tailwind_merge.ClassNameValue;
            heading?: tailwind_merge.ClassNameValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: tailwind_merge.ClassNameValue | {
            divider?: tailwind_merge.ClassNameValue;
            base?: tailwind_merge.ClassNameValue;
            group?: tailwind_merge.ClassNameValue;
            heading?: tailwind_merge.ClassNameValue;
        };
    };
} | {}, {
    base: string;
    heading: string;
    group: string;
    divider: string;
}, undefined, {
    [key: string]: {
        [key: string]: tailwind_merge.ClassNameValue | {
            divider?: tailwind_merge.ClassNameValue;
            base?: tailwind_merge.ClassNameValue;
            group?: tailwind_merge.ClassNameValue;
            heading?: tailwind_merge.ClassNameValue;
        };
    };
} | {}, {
    base: string;
    heading: string;
    group: string;
    divider: string;
}, tailwind_variants.TVReturnType<unknown, {
    base: string;
    heading: string;
    group: string;
    divider: string;
}, undefined, unknown, unknown, undefined>>;
/**
 * Dropdown Menu wrapper **Tailwind Variants** component
 *
 * const classNames = dropdownMenu({...})

 */
declare const dropdownMenu: tailwind_variants.TVReturnType<{} | {} | {}, undefined, "w-full flex flex-col gap-0.5 p-1", {} | {}, undefined, tailwind_variants.TVReturnType<unknown, undefined, "w-full flex flex-col gap-0.5 p-1", unknown, unknown, undefined>>;
type DropdownSectionVariantProps = VariantProps<typeof dropdownSection>;
type DropdownSectionSlots = keyof ReturnType<typeof dropdownSection>;
type DropdownItemVariantProps = VariantProps<typeof dropdownItem>;
type DropdownItemSlots = keyof ReturnType<typeof dropdownItem>;

export { type DropdownItemSlots, type DropdownItemVariantProps, type DropdownSectionSlots, type DropdownSectionVariantProps, dropdown, dropdownItem, dropdownMenu, dropdownSection };
