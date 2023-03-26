/* eslint-disable */
import MovieTile                    from './MovieTile';
import avengersUrl                  from './avengers.stories.png'
import inceptionUrl                 from './inception.stories.png'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline                  from '@mui/material/CssBaseline';
import {Grid}                       from "@mui/material";

export default {
    title     : "Movies/MovieTile",
    component : MovieTile,
    parameters: {
        backgrounds: {
            default: 'content'
        }
    }
};

const darkTheme = createTheme({
                                  palette: {
                                      mode: 'dark',
                                  },
                              });

const Template       = (args) => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Grid xs={12} container spacing={2}>
            <MovieTile {...args}/>
        </Grid>
    </ThemeProvider>
)
export const Default = Template.bind({})
Default.story        = {
    name: 'Single genre',
    args: {
        imageUrl   : inceptionUrl,
        title      : 'Inception',
        releaseYear: 2003,
        genres     : ['Action']
    }
};

export const MultiGenres = Template.bind({})
MultiGenres.story        = {
    name: 'Multiple genres',
    args: {
        imageUrl   : avengersUrl,
        title      : 'Avengers',
        releaseYear: 2004,
        genres     : ['Action', 'Adventure']
    }
};
