// src/utils/classes.ts
var baseStyles = (prefix) => ({
  color: `hsl(var(--${prefix}-foreground))`,
  backgroundColor: `hsl(var(--${prefix}-background))`
});
var focusVisibleClasses = [
  "focus-visible:z-10",
  "focus-visible:outline-2",
  "focus-visible:outline-focus",
  "focus-visible:outline-offset-2"
];
var dataFocusVisibleClasses = [
  "outline-hidden",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];
var groupDataFocusVisibleClasses = [
  "outline-hidden",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background"
];
var ringClasses = [
  "outline-hidden",
  "ring-2",
  "ring-focus",
  "ring-offset-2",
  "ring-offset-background"
];
var translateCenterClasses = [
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2"
];
var absoluteFullClasses = ["absolute", "inset-0"];
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

export {
  baseStyles,
  focusVisibleClasses,
  dataFocusVisibleClasses,
  groupDataFocusVisibleClasses,
  ringClasses,
  translateCenterClasses,
  absoluteFullClasses,
  collapseAdjacentVariantBorders,
  hiddenInputClasses
};
