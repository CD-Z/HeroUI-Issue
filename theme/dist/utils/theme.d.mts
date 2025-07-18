/**
 * Determines if the theme is a base theme
 *
 * @param theme string
 * @returns "light" | "dark
 */
declare const isBaseTheme: (theme: string) => theme is "light" | "dark";

export { isBaseTheme };
