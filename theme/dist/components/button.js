"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/button.ts
var button_exports = {};
__export(button_exports, {
  button: () => button,
  buttonGroup: () => buttonGroup
});
module.exports = __toCommonJS(button_exports);

// src/utils/tv.ts
var import_tailwind_variants = require("tailwind-variants");

// src/utilities/transition.ts
var DEFAULT_TRANSITION_DURATION = "250ms";
var transition_default = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  }
};

// src/utilities/custom.ts
var custom_default = {
  /**
   * Custom utilities
   */
  ".leading-inherit": {
    "line-height": "inherit"
  },
  ".bg-img-inherit": {
    "background-image": "inherit"
  },
  ".bg-clip-inherit": {
    "background-clip": "inherit"
  },
  ".text-fill-inherit": {
    "-webkit-text-fill-color": "inherit"
  },
  ".tap-highlight-transparent": {
    "-webkit-tap-highlight-color": "transparent"
  },
  ".input-search-cancel-button-none": {
    "&::-webkit-search-cancel-button": {
      "-webkit-appearance": "none"
    }
  }
};

// src/utilities/scrollbar-hide.ts
var scrollbar_hide_default = {
  /**
   * Scroll Hide
   */
  ".scrollbar-hide": {
    /* IE and Edge */
    "-ms-overflow-style": "none",
    /* Firefox */
    "scrollbar-width": "none",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ".scrollbar-default": {
    /* IE and Edge */
    "-ms-overflow-style": "auto",
    /* Firefox */
    "scrollbar-width": "auto",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "block"
    }
  }
};

// src/utilities/text.ts
var text_default = {
  /**
   * Text utilities
   */
  ".text-tiny": {
    "font-size": "var(--heroui-font-size-tiny)",
    "line-height": "var(--heroui-line-height-tiny)"
  },
  ".text-small": {
    "font-size": "var(--heroui-font-size-small)",
    "line-height": "var(--heroui-line-height-small)"
  },
  ".text-medium": {
    "font-size": "var(--heroui-font-size-medium)",
    "line-height": "var(--heroui-line-height-medium)"
  },
  ".text-large": {
    "font-size": "var(--heroui-font-size-large)",
    "line-height": "var(--heroui-line-height-large)"
  }
};

// src/utilities/animation.ts
var animation_default = {
  /** Animation Utilities */
  ".spinner-bar-animation": {
    "animation-delay": "calc(-1.2s + (0.1s * var(--bar-index)))",
    transform: "rotate(calc(30deg * var(--bar-index)))translate(140%)"
  },
  ".spinner-dot-animation": {
    "animation-delay": "calc(250ms * var(--dot-index))"
  },
  ".spinner-dot-blink-animation": {
    "animation-delay": "calc(200ms * var(--dot-index))"
  }
};

// src/utilities/index.ts
var utilities = {
  ...custom_default,
  ...transition_default,
  ...scrollbar_hide_default,
  ...text_default,
  ...animation_default
};

// src/utils/tw-merge-config.ts
var COMMON_UNITS = ["small", "medium", "large"];
var twMergeConfig = {
  theme: {
    spacing: ["divider"],
    radius: COMMON_UNITS
  },
  classGroups: {
    shadow: [{ shadow: COMMON_UNITS }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
    "border-w": [{ border: COMMON_UNITS }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(utilities).filter((key) => key.includes(".transition")).map((key) => key.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
};

// src/utils/tv.ts
var tv = (options, config) => {
  var _a, _b, _c;
  return (0, import_tailwind_variants.tv)(options, {
    ...config,
    twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
    twMergeConfig: {
      ...config == null ? void 0 : config.twMergeConfig,
      theme: {
        ...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
        ...twMergeConfig.theme
      },
      classGroups: {
        ...(_c = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c.classGroups,
        ...twMergeConfig.classGroups
      }
    }
  });
};

// src/utils/classes.ts
var dataFocusVisibleClasses = [
  "outline-hidden",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];
var collapseAdjacentVariantBorders = {
  default: ["[&+.border-medium.border-default]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  secondary: [
    "[&+.border-medium.border-secondary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"
  ],
  success: ["[&+.border-medium.border-success]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(var(--heroui-border-width-medium)*-1)]"]
};

// src/utils/variants.ts
var solid = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
};
var shadow = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
  foreground: "bg-foreground/10 text-foreground"
};
var faded = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger",
  foreground: "border-default bg-default-100 text-foreground"
};
var light = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground"
};
var ghost = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
};

// src/components/button.ts
var button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-hidden",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu data-[pressed=true]:scale-[0.97]",
    "cursor-pointer",
    // focus ring
    ...dataFocusVisibleClasses
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent"
    },
    size: {
      sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
      lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none"
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none"
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]"
    },
    disableAnimation: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "transition-transform-colors-opacity motion-reduce:transition-none"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: colorVariants.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: colorVariants.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: colorVariants.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: colorVariants.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: colorVariants.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: colorVariants.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: colorVariants.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: colorVariants.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: colorVariants.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: colorVariants.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: colorVariants.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: colorVariants.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: colorVariants.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: colorVariants.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: colorVariants.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: colorVariants.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: colorVariants.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: colorVariants.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: colorVariants.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: colorVariants.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: colorVariants.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: colorVariants.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: colorVariants.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: colorVariants.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: colorVariants.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: colorVariants.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: colorVariants.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [colorVariants.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [colorVariants.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [colorVariants.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [colorVariants.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [colorVariants.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [colorVariants.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [colorVariants.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        colorVariants.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        colorVariants.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        colorVariants.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        colorVariants.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        colorVariants.ghost.danger,
        "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"
      ]
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: true,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      isRounded: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: true,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none"
    },
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "default",
      className: collapseAdjacentVariantBorders.default
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: collapseAdjacentVariantBorders.secondary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "success",
      className: collapseAdjacentVariantBorders.success
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: collapseAdjacentVariantBorders.danger
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-8 w-8 h-8"
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-10 w-10 h-10"
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "min-w-12 w-12 h-12"
    },
    // variant / hover
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover"
    }
  ]
});
var buttonGroup = tv({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    fullWidth: false
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  button,
  buttonGroup
});
