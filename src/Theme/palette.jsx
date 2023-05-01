

export default function themePalette(theme) {
    return {
        mode: theme?.customization?.navType,
        common: {
            black: theme.colors?.darkPaper,
        },
        grey:{
            800: theme.colors?.grey800,
            700:theme.colors?.grey700,
            500:theme.colors?.grey500,
            300:theme.colors?.grey300,
            900:theme.colors?.grey900
        },
        blueGrey:{
            600:theme.colors?.blueGrey600
        },
        background: {
            paper: theme.paper,
            default: theme.colors.background
        },
        Primary:{
            dark:theme.colors?.dark,
            light:theme.colors?.light
        },
        Secondary:{
            dark:theme.colors?.dark
        },
        success:{
            light:theme.colors?.light
        },
        error:{
            light:theme.colors?.light
        }
    }
}