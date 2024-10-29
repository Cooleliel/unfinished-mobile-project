import { Dimensions } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

export const LAYOUT = {
    // Dimensions de l'écran
    window: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        isSmallDevice: WINDOW_WIDTH < 375,
    },

    // Espacements généraux
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 40,
    },

    // Bordures
    border: {
        radius: {
            xs: 4,
            sm: 8,
            md: 12,
            lg: 16,
            xl: 24,
            round: 999, 
        },
        width: {
            thin: 0.5,
            normal: 1,
            thick: 2,
        }
    },

    // Dimensions des composants
    components: { 
        brand: {
            width: 200,
            height: 50
        },
        button: {
            height: 48,
            minWidth: 120,
            iconSize: 24,
        },
        input: {
            height: 48,
            iconSize: 24,
        },
        header: {
            height: 56,
        },
        tabBar: {
            height: 60,
        },
        card: {
            minHeight: 100,
            borderRadius: 12,
        },
        avatar: {
            small: 32,
            medium: 48,
            large: 64,
        },
    },

    // Ombres
    shadow: {
        small: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
        },
        medium: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.15,
            shadowRadius: 6,
            elevation: 4,
        },
        large: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 6,
        },
    },

    // Positions z-index
    zIndex: {
        base: 0,
        card: 1,
        header: 2,
        modal: 3,
        overlay: 4,
        tooltip: 5,
        maximum: 999,
    },

    // Mise en page
    container: {
        padding: 16,
        maxWidth: 500, // Pour les tablettes/web
    },

    // Images et médias
    image: {
        thumbnail: 80,
        small: 120,
        medium: 160,
        large: 240,
        banner: {
            width: WINDOW_WIDTH,
            height: WINDOW_WIDTH * 0.5625, // Ratio 16:9
        },
    },

    // Grilles
    grid: {
        columns: {
            mobile: 4,
            tablet: 8,
            desktop: 12,
        },
        gutter: 16,
    },

    // Animations
    animation: {
        timing: {
            fast: 200,
            normal: 300,
            slow: 500,
        },
    },

    // Points de rupture responsive
    breakpoints: {
        mobile: 375,
        tablet: 768,
        desktop: 1024,
    },
} as const;