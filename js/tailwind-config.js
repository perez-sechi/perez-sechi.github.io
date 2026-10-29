// Tailwind CDN config shared by every page. Colors mirror the brand tokens in css/brand.css.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                paper: '#f7f6f2',
                surface: '#ffffff',
                'surface-2': '#f1f0eb',
                line: '#e1e0d9',
                ink: {
                    950: '#060f1d',
                    900: '#0a1628',
                    800: '#12233d',
                    700: '#1c3354',
                    600: '#2b4670',
                },
                brand: {
                    600: '#1c5cab',
                    500: '#2a78d6',
                    100: '#e3eefc',
                },
                cyan: {
                    400: '#4cc9f0',
                },
                main: '#0b0b0b',
                muted: '#52514e',
                subtle: '#898781',
                inv: '#f4f7fb',
                'inv-muted': '#b7c3d6',
                'inv-subtle': '#7f8ea6',
            },
        },
    },
};
