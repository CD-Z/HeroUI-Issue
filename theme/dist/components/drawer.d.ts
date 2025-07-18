import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

/**
 * Modal **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base} = drawer({...})
 *
 * <div>
 *    <button>Open Drawer</button>
 *    <div className={base()}>
 *       Drawer Content
 *    </div>
 * </div>
 * ```
 */
declare const drawer: tailwind_variants.TVReturnType<{
    size: {
        xs: {
            base: string;
        };
        sm: {
            base: string;
        };
        md: {
            base: string;
        };
        lg: {
            base: string;
        };
        xl: {
            base: string;
        };
        "2xl": {
            base: string;
        };
        "3xl": {
            base: string;
        };
        "4xl": {
            base: string;
        };
        "5xl": {
            base: string;
        };
        full: {
            base: string;
        };
    };
    placement: {
        top: {
            base: string;
        };
        right: {
            base: string;
        };
        bottom: {
            base: string;
        };
        left: {
            base: string;
        };
    };
}, {
    base: string[];
}, undefined, {
    size: {
        xs: {
            base: string;
        };
        sm: {
            base: string;
        };
        md: {
            base: string;
        };
        lg: {
            base: string;
        };
        xl: {
            base: string;
        };
        "2xl": {
            base: string;
        };
        "3xl": {
            base: string;
        };
        "4xl": {
            base: string;
        };
        "5xl": {
            base: string;
        };
        full: {
            base: string;
        };
    };
    placement: {
        top: {
            base: string;
        };
        right: {
            base: string;
        };
        bottom: {
            base: string;
        };
        left: {
            base: string;
        };
    };
}, {
    base: string[];
}, tailwind_variants.TVReturnType<{
    size: {
        xs: {
            base: string;
        };
        sm: {
            base: string;
        };
        md: {
            base: string;
        };
        lg: {
            base: string;
        };
        xl: {
            base: string;
        };
        "2xl": {
            base: string;
        };
        "3xl": {
            base: string;
        };
        "4xl": {
            base: string;
        };
        "5xl": {
            base: string;
        };
        full: {
            base: string;
        };
    };
    placement: {
        top: {
            base: string;
        };
        right: {
            base: string;
        };
        bottom: {
            base: string;
        };
        left: {
            base: string;
        };
    };
}, {
    base: string[];
}, undefined, unknown, unknown, undefined>>;
type DrawerVariants = VariantProps<typeof drawer>;

export { type DrawerVariants, drawer };
