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

// src/components/breadcrumbs.ts
var breadcrumbs_exports = {};
__export(breadcrumbs_exports, {
  breadcrumbItem: () => breadcrumbItem,
  breadcrumbs: () => breadcrumbs
});
module.exports = __toCommonJS(breadcrumbs_exports);

// src/utils/classes.ts
var dataFocusVisibleClasses = [
  "outline-hidden",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];

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
var import_tailwind_variants = require("tailwind-variants");
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

// src/components/breadcrumbs.ts
var breadcrumbItem = tv({
  slots: {
    base: "flex items-center",
    item: [
      "flex gap-1 items-center",
      "cursor-pointer",
      "whitespace-nowrap",
      "outline-hidden",
      "tap-highlight-transparent",
      // focus ring
      ...dataFocusVisibleClasses
    ],
    separator: "text-default-400 px-1 rtl:rotate-180"
  },
  variants: {
    color: {
      foreground: {
        item: "text-foreground/50",
        separator: "text-foreground/50"
      },
      primary: {
        item: "text-primary/80",
        separator: "text-primary/80"
      },
      secondary: {
        item: "text-secondary/80",
        separator: "text-secondary/80"
      },
      success: {
        item: "text-success/80",
        separator: "text-success/80"
      },
      warning: {
        item: "text-warning/80",
        separator: "text-warning/80"
      },
      danger: {
        item: "text-danger/80",
        separator: "text-danger/80"
      }
    },
    size: {
      sm: {
        item: "text-tiny"
      },
      md: {
        item: "text-small"
      },
      lg: {
        item: "text-medium"
      }
    },
    underline: {
      none: {
        item: "no-underline"
      },
      hover: {
        item: "hover:underline"
      },
      always: {
        item: "underline"
      },
      active: {
        item: "active:underline"
      },
      focus: {
        item: "focus:underline"
      }
    },
    isCurrent: {
      true: {
        item: "cursor-default"
      },
      false: {
        item: ["hover:opacity-hover", "active:opacity-disabled"]
      }
    },
    isDisabled: {
      true: {
        item: "opacity-disabled pointer-events-none",
        separator: "opacity-disabled"
      }
    },
    disableAnimation: {
      false: {
        item: "transition-opacity"
      },
      true: {
        item: "transition-none"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "foreground",
    underline: "hover",
    isDisabled: false
  },
  compoundVariants: [
    // isCurrent && color
    {
      isCurrent: true,
      color: "foreground",
      class: {
        item: "text-foreground"
      }
    },
    {
      isCurrent: true,
      color: "primary",
      class: {
        item: "text-primary"
      }
    },
    {
      isCurrent: true,
      color: "secondary",
      class: {
        item: "text-secondary"
      }
    },
    {
      isCurrent: true,
      color: "success",
      class: {
        item: "text-success"
      }
    },
    {
      isCurrent: true,
      color: "warning",
      class: {
        item: "text-warning"
      }
    },
    {
      isCurrent: true,
      color: "danger",
      class: {
        item: "text-danger"
      }
    },
    // !isCurrent && underline
    {
      isCurrent: false,
      underline: "none",
      class: {
        item: "no-underline"
      }
    },
    // Underline
    {
      underline: ["hover", "always", "active", "focus"],
      class: "underline-offset-4"
    }
  ]
});
var breadcrumbs = tv({
  slots: {
    base: "",
    list: "flex flex-wrap list-none",
    ellipsis: "text-medium",
    separator: "text-default-400 px-1"
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {}
    },
    radius: {
      none: {
        list: "rounded-none"
      },
      sm: {
        list: "rounded-small"
      },
      md: {
        list: "rounded-medium"
      },
      lg: {
        list: "rounded-large"
      },
      full: {
        list: "rounded-full"
      }
    },
    variant: {
      solid: {
        list: "bg-default-100"
      },
      bordered: {
        list: "border-medium border-default-200 shadow-xs"
      },
      light: {}
    }
  },
  defaultVariants: {
    size: "md",
    radius: "sm",
    variant: "light"
  },
  compoundVariants: [
    // variant
    {
      variant: ["solid", "bordered"],
      class: {
        list: "max-w-fit"
      }
    },
    // variant={solid,bordered} && size
    {
      variant: ["solid", "bordered"],
      size: "sm",
      class: {
        list: "px-2 py-1"
      }
    },
    {
      variant: ["solid", "bordered"],
      size: "md",
      class: {
        list: "px-2.5 py-1.5"
      }
    },
    {
      variant: ["solid", "bordered"],
      size: "lg",
      class: {
        list: "px-3 py-2"
      }
    }
  ]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  breadcrumbItem,
  breadcrumbs
});
