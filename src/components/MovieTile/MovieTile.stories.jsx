/* eslint-disable */
import MovieTile from './MovieTile';
import avengersUrl from './avengers.stories.png'
import inceptionUrl from './inception.stories.png'
import appStyles from "../../App.module.css";
import headerStyles from "../Header/Header.module.css";
import {Container, Grid} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";

export default {
    title: "Movies/MovieTile",
    component: MovieTile,
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
const Template = (args) => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Container className={appStyles.App} fixed>
            <Grid xs={12} container className={headerStyles.Header} item={true}>
                <MovieTile {...args}/>
            </Grid>
        </Container>
    </ThemeProvider>
)

export const Default = Template.bind({})
Default.story = {
    name: 'Single genre',
    args: {
        imageUrl: inceptionUrl,
        title: 'Inception',
        releaseYear: 2003,
        genres: ['Action']
    }
};

export const MultiGenres = Template.bind({})
MultiGenres.story = {
    name: 'Multiple genres',
    args: {
        imageUrl: avengersUrl,
        title: 'Avengers',
        releaseYear: 2004,
        genres: ['Action', 'Adventure']
    }
};
