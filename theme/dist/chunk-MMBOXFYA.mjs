import {
  isBaseTheme
} from "./chunk-D2XMP2NC.mjs";
import {
  baseStyles
} from "./chunk-3HKZRFKK.mjs";
import {
  utilities
} from "./chunk-6JJPIEK7.mjs";
import {
  DEFAULT_TRANSITION_DURATION
} from "./chunk-GSRZWDGA.mjs";
import {
  semanticColors
} from "./chunk-G4RCK475.mjs";
import {
  flattenThemeObject
} from "./chunk-KUNVFLXJ.mjs";
import {
  darkLayout,
  defaultLayout,
  lightLayout
} from "./chunk-HUBDRSA4.mjs";
import {
  animations
} from "./chunk-KXPLHLA6.mjs";
import {
  commonColors
} from "./chunk-IAS3SFA4.mjs";

// src/plugin.ts
import Color from "color";
import plugin from "tailwindcss/plugin.js";
import deepMerge from "deepmerge";
import { omit, kebabCase, mapKeys } from "@heroui/shared-utils";
var DEFAULT_PREFIX = "heroui";
var parsedColorsCache = {};
var resolveConfig = (themes = {}, defaultTheme, prefix) => {
  const resolved = {
    variants: [],
    utilities: {},
    colors: {},
    baseStyles: {}
  };
  for (const [themeName, { extend, layout, colors }] of Object.entries(themes)) {
    let cssSelector = `.${themeName}`;
    const scheme = themeName === "light" || themeName === "dark" ? themeName : extend;
    let baseSelector = "";
    if (themeName === defaultTheme) {
      baseSelector = `:root, [data-theme=${themeName}]`;
    }
    baseSelector && (resolved.baseStyles[baseSelector] = scheme ? {
      "color-scheme": scheme
    } : {});
    resolved.utilities[cssSelector] = scheme ? {
      "color-scheme": scheme
    } : {};
    const flatColors = flattenThemeObject(colors);
    const flatLayout = layout ? mapKeys(layout, (_, key) => kebabCase(key)) : {};
    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`]
    });
    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue) return;
      try {
        const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round(2).array();
        parsedColorsCache[colorValue] = parsedColor;
        const [h, s, l, defaultAlphaValue] = parsedColor;
        const herouiColorVariable = `--${prefix}-${colorName}`;
        resolved.utilities[cssSelector][herouiColorVariable] = `${h} ${s}% ${l}%`;
        baseSelector && (resolved.baseStyles[baseSelector][herouiColorVariable] = `${h} ${s}% ${l}%`);
        resolved.colors[colorName] = `hsl(var(${herouiColorVariable}) / ${defaultAlphaValue != null ? defaultAlphaValue : "<alpha-value>"})`;
      } catch (error) {
        console.log("error", error == null ? void 0 : error.message);
      }
    }
    for (const [key, value] of Object.entries(flatLayout)) {
      if (!value) return;
      const layoutVariablePrefix = `--${prefix}-${key}`;
      if (typeof value === "object") {
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          const nestedLayoutVariable = `${layoutVariablePrefix}-${nestedKey}`;
          resolved.utilities[cssSelector][nestedLayoutVariable] = nestedValue;
          baseSelector && (resolved.baseStyles[baseSelector][nestedLayoutVariable] = nestedValue);
        }
      } else {
        const formattedValue = layoutVariablePrefix.includes("opacity") && typeof value === "number" ? value.toString().replace(/^0\./, ".") : value;
        resolved.utilities[cssSelector][layoutVariablePrefix] = formattedValue;
        baseSelector && (resolved.baseStyles[baseSelector][layoutVariablePrefix] = formattedValue);
      }
    }
  }
  return resolved;
};
var corePlugin = (themes = {}, defaultTheme, prefix, addCommonColors) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix);
  const createStripeGradient = (stripeColor, backgroundColor) => `linear-gradient(45deg,  hsl(var(--${prefix}-${stripeColor})) 25%,  hsl(var(--${prefix}-${backgroundColor})) 25%,  hsl(var(--${prefix}-${backgroundColor})) 50%,  hsl(var(--${prefix}-${stripeColor})) 50%,  hsl(var(--${prefix}-${stripeColor})) 75%,  hsl(var(--${prefix}-${backgroundColor})) 75%,  hsl(var(--${prefix}-${backgroundColor})))`;
  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      addBase({
        [":root, [data-theme]"]: {
          ...baseStyles(prefix)
        }
      });
      addBase({ ...resolved == null ? void 0 : resolved.baseStyles });
      addUtilities({ ...resolved == null ? void 0 : resolved.utilities, ...utilities });
      resolved == null ? void 0 : resolved.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition);
      });
    },
    // extend the colors config
    {
      theme: {
        extend: {
          // @ts-ignore
          colors: {
            ...addCommonColors ? commonColors : {},
            ...resolved == null ? void 0 : resolved.colors
          },
          scale: {
            "80": "0.8",
            "85": "0.85"
          },
          height: {
            divider: `var(--${prefix}-divider-weight)`
          },
          width: {
            divider: `var(--${prefix}-divider-weight)`
          },
          borderRadius: {
            small: `var(--${prefix}-radius-small)`,
            medium: `var(--${prefix}-radius-medium)`,
            large: `var(--${prefix}-radius-large)`
          },
          opacity: {
            hover: `var(--${prefix}-hover-opacity)`,
            disabled: `var(--${prefix}-disabled-opacity)`
          },
          borderWidth: {
            small: `var(--${prefix}-border-width-small)`,
            medium: `var(--${prefix}-border-width-medium)`,
            large: `var(--${prefix}-border-width-large)`,
            1: "1px",
            1.5: "1.5px",
            3: "3px",
            5: "5px"
          },
          boxShadow: {
            small: `var(--${prefix}-box-shadow-small)`,
            medium: `var(--${prefix}-box-shadow-medium)`,
            large: `var(--${prefix}-box-shadow-large)`
          },
          backgroundSize: {
            "stripe-size": "1.25rem 1.25rem"
          },
          backgroundImage: {
            "stripe-gradient-default": createStripeGradient("default-200", "default-400"),
            "stripe-gradient-primary": createStripeGradient("primary-200", "primary"),
            "stripe-gradient-secondary": createStripeGradient("secondary-200", "secondary"),
            "stripe-gradient-success": createStripeGradient("success-200", "success"),
            "stripe-gradient-warning": createStripeGradient("warning-200", "warning"),
            "stripe-gradient-danger": createStripeGradient("danger-200", "danger")
          },
          transitionDuration: {
            0: "0ms",
            250: "250ms",
            400: "400ms",
            DEFAULT: DEFAULT_TRANSITION_DURATION
          },
          transitionTimingFunction: {
            "soft-spring": "cubic-bezier(0.155, 1.105, 0.295, 1.12)"
          },
          ...animations
        }
      }
    }
  );
};
var heroui = (config = {}) => {
  var _a, _b, _c, _d;
  const {
    themes: themeObject = {},
    defaultTheme = "light",
    layout: userLayout,
    defaultExtendTheme = "light",
    prefix: defaultPrefix = DEFAULT_PREFIX,
    addCommonColors = false
  } = config;
  const userLightColors = ((_a = themeObject == null ? void 0 : themeObject.light) == null ? void 0 : _a.colors) || {};
  const userDarkColors = ((_b = themeObject == null ? void 0 : themeObject.dark) == null ? void 0 : _b.colors) || {};
  const defaultLayoutObj = userLayout && typeof userLayout === "object" ? deepMerge(defaultLayout, userLayout) : defaultLayout;
  const baseLayouts = {
    light: {
      ...defaultLayoutObj,
      ...lightLayout
    },
    dark: {
      ...defaultLayoutObj,
      ...darkLayout
    }
  };
  let otherThemes = omit(themeObject, ["light", "dark"]) || {};
  Object.entries(otherThemes).forEach(([themeName, { extend, colors, layout }]) => {
    const baseTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme;
    const baseColors = semanticColors[baseTheme];
    otherThemes[themeName].colors = colors && typeof colors === "object" ? deepMerge(baseColors, colors) : baseColors;
    const baseLayout = extend ? baseLayouts[extend] : defaultLayoutObj;
    otherThemes[themeName].layout = layout && typeof layout === "object" ? deepMerge(baseLayout, layout) : baseLayout;
  });
  const light = {
    layout: deepMerge(baseLayouts.light, ((_c = themeObject == null ? void 0 : themeObject.light) == null ? void 0 : _c.layout) || {}),
    colors: deepMerge(semanticColors.light, userLightColors)
  };
  const dark = {
    layout: deepMerge(baseLayouts.dark, ((_d = themeObject == null ? void 0 : themeObject.dark) == null ? void 0 : _d.layout) || {}),
    colors: deepMerge(semanticColors.dark, userDarkColors)
  };
  const themes = {
    light,
    dark,
    ...otherThemes
  };
  return corePlugin(themes, defaultTheme, defaultPrefix, addCommonColors);
};

export {
  heroui
};
