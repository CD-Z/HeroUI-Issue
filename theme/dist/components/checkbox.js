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

// src/components/checkbox.ts
var checkbox_exports = {};
__export(checkbox_exports, {
  checkbox: () => checkbox,
  checkboxGroup: () => checkboxGroup
});
module.exports = __toCommonJS(checkbox_exports);

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
var groupDataFocusVisibleClasses = [
  "outline-hidden",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background"
];
var hiddenInputClasses = [
  // Font styles
  "font-inherit",
  "text-[100%]",
  "leading-[1.15]",
  // Reset margins and padding
  "m-0",
  "p-0",
  // Overflow and box-sizing
  "overflow-visible",
  "box-border",
  // Positioning & Hit area
  "absolute",
  "top-0",
  "w-full",
  "h-full",
  // Opacity and z-index
  "opacity-[0.0001]",
  "z-[1]",
  // Cursor
  "cursor-pointer",
  // Disabled state
  "disabled:cursor-default"
];

// src/components/checkbox.ts
var checkbox = tv({
  slots: {
    base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2 select-none",
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "shrink-0",
      "overflow-hidden",
      // before
      "before:content-['']",
      "before:absolute",
      "before:inset-0",
      "before:border-solid",
      "before:border-2",
      "before:box-border",
      "before:border-default",
      // after
      "after:content-['']",
      "after:absolute",
      "after:inset-0",
      "after:scale-50",
      "after:opacity-0",
      "after:origin-center",
      "group-data-[selected=true]:after:scale-100",
      "group-data-[selected=true]:after:opacity-100",
      // hover
      "group-data-[hover=true]:before:bg-default-100",
      // focus ring
      ...groupDataFocusVisibleClasses
    ],
    hiddenInput: hiddenInputClasses,
    icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100 pointer-events-none",
    label: "relative text-foreground select-none"
  },
  variants: {
    color: {
      default: {
        wrapper: "after:bg-default after:text-default-foreground text-default-foreground"
      },
      primary: {
        wrapper: "after:bg-primary after:text-primary-foreground text-primary-foreground"
      },
      secondary: {
        wrapper: "after:bg-secondary after:text-secondary-foreground text-secondary-foreground"
      },
      success: {
        wrapper: "after:bg-success after:text-success-foreground text-success-foreground"
      },
      warning: {
        wrapper: "after:bg-warning after:text-warning-foreground text-warning-foreground"
      },
      danger: {
        wrapper: "after:bg-danger after:text-danger-foreground text-danger-foreground"
      }
    },
    size: {
      sm: {
        wrapper: [
          "w-4 h-4 me-2",
          "rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.5)]"
        ],
        label: "text-small",
        icon: "w-3 h-2"
      },
      md: {
        wrapper: [
          "w-5 h-5 me-2",
          "rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.6)]"
        ],
        label: "text-medium",
        icon: "w-4 h-3"
      },
      lg: {
        wrapper: [
          "w-6 h-6 me-2",
          "rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.7)]"
        ],
        label: "text-large",
        icon: "w-5 h-4"
      }
    },
    radius: {
      none: {
        wrapper: "rounded-none before:rounded-none after:rounded-none"
      },
      sm: {
        wrapper: [
          "rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.5)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.5)]"
        ]
      },
      md: {
        wrapper: [
          "rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.6)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.6)]"
        ]
      },
      lg: {
        wrapper: [
          "rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "before:rounded-[calc(var(--heroui-radius-medium)*0.7)]",
          "after:rounded-[calc(var(--heroui-radius-medium)*0.7)]"
        ]
      },
      full: {
        wrapper: "rounded-full before:rounded-full after:rounded-full"
      }
    },
    lineThrough: {
      true: {
        label: [
          "inline-flex",
          "items-center",
          "justify-center",
          "before:content-['']",
          "before:absolute",
          "before:bg-foreground",
          "before:w-0",
          "before:h-0.5",
          "group-data-[selected=true]:opacity-60",
          "group-data-[selected=true]:before:w-full"
        ]
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    isInvalid: {
      true: {
        wrapper: "before:border-danger",
        label: "text-danger"
      }
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
        label: "transition-none"
      },
      false: {
        wrapper: [
          "before:transition-colors",
          "group-data-[pressed=true]:scale-95",
          "transition-transform",
          "after:transition-transform-opacity",
          "after:!ease-linear",
          "after:!duration-200",
          "motion-reduce:transition-none"
        ],
        icon: "transition-opacity motion-reduce:transition-none",
        label: "transition-colors-opacity before:transition-width motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: false,
    lineThrough: false
  }
});
var checkboxGroup = tv({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-medium text-foreground-500",
    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    description: "text-small text-foreground-400",
    errorMessage: "text-small text-danger"
  },
  variants: {
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5"
      }
    },
    isInvalid: {
      true: {
        description: "text-danger"
      }
    },
    disableAnimation: {
      true: {},
      false: {
        description: "transition-colors !duration-150 motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    isInvalid: false,
    isRequired: false
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkbox,
  checkboxGroup
});
