/* eslint-disable */
import MovieTile                    from './MovieTile';
import avengersUrl                  from './avengers.stories.png'
import inceptionUrl                 from './inception.stories.png'

export default {
    title     : "Movies/MovieTile",
    component : MovieTile,
    parameters: {
        backgrounds: {
            default: 'content'
        }
    }
};

const Template = (args) => <MovieTile {...args}/>

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
