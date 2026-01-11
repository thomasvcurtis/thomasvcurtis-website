import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary:{
            main: '#025B18' // Emerald Green
        },
        secondary:{
            main: '#1FC742' // Lime Green
        },
        background:{
            default: '#010101' //Black
        },
        text:{
            primary: '#025B18', // Emerald Green
            secondary: '#1FC742', // Lime Green
        }
    },
    typography: {
        fontFamily: '"VT323", monospace',
        body1:{
            fontSize: '1.5rem',
        }
    }
});