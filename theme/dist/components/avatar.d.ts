import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';

/**
 * Avatar wrapper **Tailwind Variants** component
 *
 * const {base, img, icon, name } = avatar({...})
 *
 * @example
 * <div className={base())} data-hover={true/false} data-focus={true/false} data-focus-visible={true/false}>
 *    <img className={img()} src="https://picsum.photos/200/300" alt="your avatar" />
 *    <div role="img" aria-label="your name" className={name()}>your name</div>
 *    <span role="img" aria-label="your icon" className={icon()}>your icon</span>
 * </div>
 */
declare const avatar: tailwind_variants.TVReturnType<{
    size: {
        sm: {
            base: string;
        };
        md: {
            base: string;
        };
        lg: {
            base: string;
        };
    };
    color: {
        default: {
            base: string;
        };
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        danger: {
            base: string;
        };
    };
    radius: {
        none: {
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
        full: {
            base: string;
        };
    };
    isBordered: {
        true: {
            base: string;
        };
    };
    isDisabled: {
        true: {
            base: string;
        };
    };
    isInGroup: {
        true: {
            base: string[];
        };
    };
    isInGridGroup: {
        true: {
            base: string;
        };
    };
    disableAnimation: {
        true: {
            base: string;
            img: string;
        };
        false: {};
    };
}, {
    base: string[];
    img: string[];
    fallback: string[];
    name: string[];
    icon: string[];
}, undefined, {
    size: {
        sm: {
            base: string;
        };
        md: {
            base: string;
        };
        lg: {
            base: string;
        };
    };
    color: {
        default: {
            base: string;
        };
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        danger: {
            base: string;
        };
    };
    radius: {
        none: {
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
        full: {
            base: string;
        };
    };
    isBordered: {
        true: {
            base: string;
        };
    };
    isDisabled: {
        true: {
            base: string;
        };
    };
    isInGroup: {
        true: {
            base: string[];
        };
    };
    isInGridGroup: {
        true: {
            base: string;
        };
    };
    disableAnimation: {
        true: {
            base: string;
            img: string;
        };
        false: {};
    };
}, {
    base: string[];
    img: string[];
    fallback: string[];
    name: string[];
    icon: string[];
}, tailwind_variants.TVReturnType<{
    size: {
        sm: {
            base: string;
        };
        md: {
            base: string;
        };
        lg: {
            base: string;
        };
    };
    color: {
        default: {
            base: string;
        };
        primary: {
            base: string;
        };
        secondary: {
            base: string;
        };
        success: {
            base: string;
        };
        warning: {
            base: string;
        };
        danger: {
            base: string;
        };
    };
    radius: {
        none: {
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
        full: {
            base: string;
        };
    };
    isBordered: {
        true: {
            base: string;
        };
    };
    isDisabled: {
        true: {
            base: string;
        };
    };
    isInGroup: {
        true: {
            base: string[];
        };
    };
    isInGridGroup: {
        true: {
            base: string;
        };
    };
    disableAnimation: {
        true: {
            base: string;
            img: string;
        };
        false: {};
    };
}, {
    base: string[];
    img: string[];
    fallback: string[];
    name: string[];
    icon: string[];
}, undefined, unknown, unknown, undefined>>;
/**
 * AvatarGroup wrapper **Tailwind Variants** component
 *
 * const classNames = avatarGroup({...})
 *
 * @example
 * <div role="group" className={classNames())}>
 *   // avatar elements
 * </div>
 */
declare const avatarGroup: tailwind_variants.TVReturnType<{
    isGrid: {
        true: string;
    };
}, {
    base: string;
    count: string;
}, undefined, {
    isGrid: {
        true: string;
    };
}, {
    base: string;
    count: string;
}, tailwind_variants.TVReturnType<{
    isGrid: {
        true: string;
    };
}, {
    base: string;
    count: string;
}, undefined, unknown, unknown, undefined>>;
type AvatarGroupVariantProps = VariantProps<typeof avatarGroup>;
type AvatarGroupSlots = keyof ReturnType<typeof avatarGroup>;
type AvatarVariantProps = VariantProps<typeof avatar>;
type AvatarSlots = keyof ReturnType<typeof avatar>;

export { type AvatarGroupSlots, type AvatarGroupVariantProps, type AvatarSlots, type AvatarVariantProps, avatar, avatarGroup };
