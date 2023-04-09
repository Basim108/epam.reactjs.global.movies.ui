/* eslint-disable */
import MovieTile from './MovieTile';
import avengersUrl from './avengers.stories.png'
import inceptionUrl from './inception.stories.png'
import appStyles from "../../App.module.css";
import headerStyles from "../Header/Header.module.css";
import {Container, Grid} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import dayjs from "dayjs";

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
        info: {
            id: 1,
            imageUrl: inceptionUrl,
            title: 'Inception',
            releaseDate: dayjs('2010-10-18', 'YYYY-MM-DD'),
            genre: ['Action'],
            rating: 8.8,
            overview: 'Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people\'s dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone\'s mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb\'s every move.'
        },
        genreList: ['Adventure', 'Documentary', 'Comedy', 'Horror', 'Science Fiction', 'Crime', 'Romance', 'Fantasy'],
    }
};

export const MultiGenres = Template.bind({})
MultiGenres.story = {
    name: 'Multiple genres',
    args: {
        info: {
            id: 2,
            imageUrl: avengersUrl,
            title: 'Avengers',
            releaseDate: dayjs('2012-10-18', 'YYYY-MM-DD'),
            genre: ['Action', 'Adventure'],
            rating: 8,
            overview: 'When Thor\'s evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury\'s "dream team" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).'
        },
        genreList: ['Adventure', 'Documentary', 'Comedy', 'Horror', 'Science Fiction', 'Crime', 'Romance', 'Fantasy'],
    }
};
