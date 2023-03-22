describe('GenreSelect e2e tests', () => {
    beforeEach(async () => {
        await browser.url('/');
    })
    it('when clicking on genre should select it', async () => {
        const allGenre = await $('[data-genre="All"]')
        expect(allGenre).toHaveText('ALL')
        expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
        await allGenre.click()
        expect(allGenre).toHaveElementClassContaining('selectedGenre');
    });

    it('when clicking on one genre should deselect previousely selcted one', async () => {
        const allGenre = await $('[data-genre="All"]')
        expect(allGenre).toHaveText('ALL')
        expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
        await allGenre.click()
        expect(allGenre).toHaveElementClassContaining('selectedGenre');

        const comedyGenre = await $('[data-genre="Comedy"]')
        await comedyGenre.click()
        expect(comedyGenre).toHaveElementClassContaining('selectedGenre');
        expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
    });

    it('it should render all genres passed in props', async () => {
        const genreList = ['All', 'Comedy', 'Drama', 'Romance'];
        for (let genre of genreList) {
            const node = await $(`[data-genre="${genre}"]`)
            expect(node).toHaveText(genre.toUpperCase())
        }
    });
});

