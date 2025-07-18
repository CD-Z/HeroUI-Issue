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

// src/components/slider.ts
var slider_exports = {};
__export(slider_exports, {
  slider: () => slider
});
module.exports = __toCommonJS(slider_exports);

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

// src/components/slider.ts
var slider = tv({
  slots: {
    base: "flex flex-col w-full gap-1",
    labelWrapper: "w-full flex justify-between items-center",
    label: "",
    value: "",
    step: [
      "h-1.5",
      "w-1.5",
      "absolute",
      "rounded-full",
      "bg-default-300/50",
      "data-[in-range=true]:bg-background/50"
    ],
    mark: [
      "absolute",
      "text-small",
      "cursor-default",
      "opacity-50",
      "data-[in-range=true]:opacity-100"
    ],
    trackWrapper: "relative flex gap-2",
    track: ["flex", "w-full", "relative", "rounded-full", "bg-default-300/50"],
    filler: "h-full absolute",
    thumb: [
      "flex",
      "justify-center",
      "items-center",
      "before:absolute",
      "before:w-11",
      "before:h-11",
      "before:rounded-full",
      "after:shadow-small",
      "after:shadow-small",
      "after:bg-background",
      "data-[focused=true]:z-10",
      dataFocusVisibleClasses
    ],
    startContent: [],
    endContent: []
  },
  variants: {
    size: {
      sm: {
        label: "text-small",
        value: "text-small",
        thumb: "w-5 h-5 after:w-4 after:h-4",
        step: "data-[in-range=false]:bg-default-200"
      },
      md: {
        thumb: "w-6 h-6 after:w-5 after:h-5",
        label: "text-small",
        value: "text-small"
      },
      lg: {
        thumb: "h-7 w-7 after:w-5 after:h-5",
        step: "w-2 h-2",
        label: "text-medium",
        value: "text-medium",
        mark: "mt-2"
      }
    },
    radius: {
      none: {
        thumb: "rounded-none after:rounded-none"
      },
      sm: {
        thumb: "rounded-[calc(var(--heroui-radius-small)/2)] after:rounded-[calc(var(--heroui-radius-small)/3)]"
      },
      md: {
        thumb: "rounded-[calc(var(--heroui-radius-medium)/2)] after:rounded-[calc(var(--heroui-radius-medium)/3)]"
      },
      lg: {
        thumb: "rounded-[calc(var(--heroui-radius-large)/1.5)] after:rounded-[calc(var(--heroui-radius-large)/2)]"
      },
      full: {
        thumb: "rounded-full after:rounded-full"
      }
    },
    color: {
      foreground: {
        filler: "bg-foreground",
        thumb: "bg-foreground"
      },
      primary: {
        filler: "bg-primary",
        thumb: "bg-primary"
      },
      secondary: {
        filler: "bg-secondary",
        thumb: "bg-secondary"
      },
      success: {
        filler: "bg-success",
        thumb: "bg-success"
      },
      warning: {
        filler: "bg-warning",
        thumb: "bg-warning"
      },
      danger: {
        filler: "bg-danger",
        thumb: "bg-danger"
      }
    },
    isVertical: {
      true: {
        base: "w-auto h-full flex-col-reverse items-center",
        trackWrapper: "flex-col h-full justify-center items-center",
        filler: "w-full h-auto",
        thumb: "left-1/2",
        track: "h-full border-y-transparent",
        labelWrapper: "flex-col justify-center items-center",
        step: ["left-1/2", "-translate-x-1/2", "translate-y-1/2"],
        mark: ["left-1/2", "ml-1", "translate-x-1/2", "translate-y-1/2"]
      },
      false: {
        thumb: "top-1/2",
        trackWrapper: "items-center",
        track: "border-x-transparent",
        step: ["top-1/2", "-translate-x-1/2", "-translate-y-1/2"],
        mark: ["top-1/2", "mt-1", "-translate-x-1/2", "translate-y-1/2"]
      }
    },
    isDisabled: {
      false: {
        thumb: ["cursor-grab", "data-[dragging=true]:cursor-grabbing"]
      },
      true: {
        base: "opacity-disabled",
        thumb: "cursor-default"
      }
    },
    hasMarks: {
      true: {
        base: "mb-5",
        mark: "cursor-pointer"
      },
      false: {}
    },
    showOutline: {
      true: {
        thumb: "ring-2 ring-background"
      },
      false: {
        thumb: "ring-transparent border-0"
      }
    },
    hideValue: {
      true: {
        value: "sr-only"
      }
    },
    hideThumb: {
      true: {
        thumb: "sr-only",
        track: "cursor-pointer"
      }
    },
    hasSingleThumb: {
      true: {},
      false: {}
    },
    disableAnimation: {
      true: {
        thumb: "data-[dragging=true]:after:scale-100"
      },
      false: {
        thumb: "after:transition-all motion-reduce:after:transition-none",
        mark: "transition-opacity motion-reduce:transition-none"
      }
    },
    disableThumbScale: {
      true: {},
      false: {
        thumb: "data-[dragging=true]:after:scale-80"
      }
    }
  },
  compoundVariants: [
    // size="sm" || size="md" && showOutline={false}
    {
      size: ["sm", "md"],
      showOutline: false,
      class: {
        thumb: "shadow-small"
      }
    },
    // size && color
    {
      size: "sm",
      color: "foreground",
      class: {
        step: "data-[in-range=true]:bg-foreground"
      }
    },
    {
      size: "sm",
      color: "primary",
      class: {
        step: "data-[in-range=true]:bg-primary"
      }
    },
    {
      size: "sm",
      color: "secondary",
      class: {
        step: "data-[in-range=true]:bg-secondary"
      }
    },
    {
      size: "sm",
      color: "success",
      class: {
        step: "data-[in-range=true]:bg-success"
      }
    },
    {
      size: "sm",
      color: "warning",
      class: {
        step: "data-[in-range=true]:bg-warning"
      }
    },
    {
      size: "sm",
      color: "danger",
      class: {
        step: "data-[in-range=true]:bg-danger"
      }
    },
    // size && !isVertical
    {
      size: "sm",
      isVertical: false,
      class: {
        track: "h-1 my-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-x-[calc(theme(spacing.5)/2)]"
      }
    },
    {
      size: "md",
      isVertical: false,
      class: {
        track: "h-3 my-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-x-[calc(theme(spacing.6)/2)]"
      }
    },
    {
      size: "lg",
      isVertical: false,
      class: {
        track: "h-7 my-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-x-[calc(theme(spacing.7)/2)]"
      }
    },
    // size && isVertical
    {
      size: "sm",
      isVertical: true,
      class: {
        track: "w-1 mx-[calc((theme(spacing.5)-theme(spacing.1))/2)] border-y-[calc(theme(spacing.5)/2)]"
      }
    },
    {
      size: "md",
      isVertical: true,
      class: {
        track: "w-3 mx-[calc((theme(spacing.6)-theme(spacing.3))/2)] border-y-[calc(theme(spacing.6)/2)]"
      }
    },
    {
      size: "lg",
      isVertical: true,
      class: {
        track: "w-7 mx-[calc((theme(spacing.7)-theme(spacing.5))/2)] border-y-[calc(theme(spacing.7)/2)]"
      }
    },
    // color && !isVertical
    {
      color: "foreground",
      isVertical: false,
      class: {
        track: "data-[fill-start=true]:border-s-foreground data-[fill-end=true]:border-e-foreground"
      }
    },
    {
      color: "primary",
      isVertical: false,
      class: {
        track: "data-[fill-start=true]:border-s-primary data-[fill-end=true]:border-e-primary"
      }
    },
    {
      color: "secondary",
      isVertical: false,
      class: {
        track: "data-[fill-start=true]:border-s-secondary data-[fill-end=true]:border-e-secondary"
      }
    },
    {
      color: "success",
      isVertical: false,
      class: {
        track: "data-[fill-start=true]:border-s-success data-[fill-end=true]:border-e-success"
      }
    },
    {
      color: "warning",
      isVertical: false,
      class: {
        track: "data-[fill-start=true]:border-s-warning data-[fill-end=true]:border-e-warning"
      }
    },
    {
      color: "danger",
      isVertical: false,
      class: {
        track: "data-[fill-start=true]:border-s-danger data-[fill-end=true]:border-e-danger"
      }
    },
    // color && isVertical
    {
      color: "foreground",
      isVertical: true,
      class: {
        track: "data-[fill-start=true]:border-b-foreground data-[fill-end=true]:border-t-foreground"
      }
    },
    {
      color: "primary",
      isVertical: true,
      class: {
        track: "data-[fill-start=true]:border-b-primary data-[fill-end=true]:border-t-primary"
      }
    },
    {
      color: "secondary",
      isVertical: true,
      class: {
        track: "data-[fill-start=true]:border-b-secondary data-[fill-end=true]:border-t-secondary"
      }
    },
    {
      color: "success",
      isVertical: true,
      class: {
        track: "data-[fill-start=true]:border-b-success data-[fill-end=true]:border-t-success"
      }
    },
    {
      color: "warning",
      isVertical: true,
      class: {
        track: "data-[fill-start=true]:border-b-warning data-[fill-end=true]:border-t-warning"
      }
    },
    {
      color: "danger",
      isVertical: true,
      class: {
        track: "data-[fill-start=true]:border-b-danger data-[fill-end=true]:border-t-danger"
      }
    }
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    radius: "full",
    hideValue: false,
    hideThumb: false,
    isDisabled: false,
    disableThumbScale: false,
    showOutline: false
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  slider
});
