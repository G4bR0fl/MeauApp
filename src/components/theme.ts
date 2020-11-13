import {
    DefaultTheme
} from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#88c9bf',
        accent: '#f1c40f',
    },
};

const invertedTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#f1c40f',
        accent: '#88c9bf',
    },
};

export {
    theme,
    invertedTheme
};
