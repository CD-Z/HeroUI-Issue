declare const animations: {
    animation: {
        shimmer: string;
        "drip-expand": string;
        "spinner-ease-spin": string;
        "spinner-linear-spin": string;
        sway: string;
        blink: string;
        "fade-out": string;
        "appearance-in": string;
        "appearance-out": string;
        "indeterminate-bar": string;
    };
    keyframes: {
        shimmer: {
            "100%": {
                transform: string;
            };
        };
        "spinner-spin": {
            "0%": {
                transform: string;
            };
            "100%": {
                transform: string;
            };
        };
        "drip-expand": {
            "0%": {
                opacity: string;
                transform: string;
            };
            "100%": {
                opacity: string;
                transform: string;
            };
        };
        "appearance-in": {
            "0%": {
                opacity: string;
                transform: string;
            };
            "60%": {
                opacity: string;
                backfaceVisibility: string;
                webkitFontSmoothing: string;
                transform: string;
            };
            "100%": {
                opacity: string;
                transform: string;
            };
        };
        "appearance-out": {
            "0%": {
                opacity: string;
                transform: string;
            };
            "100%": {
                opacity: string;
                transform: string;
            };
        };
        "indeterminate-bar": {
            "0%": {
                transform: string;
            };
            "100%": {
                transform: string;
            };
        };
        sway: {
            "0%": {
                transform: string;
            };
            "50%": {
                transform: string;
            };
            "100%": {
                transform: string;
            };
        };
        blink: {
            "0%": {
                opacity: string;
            };
            "20%": {
                opacity: string;
            };
            "100%": {
                opacity: string;
            };
        };
        "fade-out": {
            "0%": {
                opacity: string;
            };
            "100%": {
                opacity: string;
            };
        };
    };
};

export { animations };
