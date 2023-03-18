describe('GenreSelect e2e tests', () => {
    beforeEach(async () => {
        await browser.url('/');
    })
    it('when clicking on genre should select it', async () => {
        const allGenre = await $('[data-genre="All"]')
        await expect(allGenre).toHaveText('ALL')
        await expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
        await allGenre.click()
        await expect(allGenre).toHaveElementClassContaining('selectedGenre');
    });

    it('when clicking on one genre should deselect previousely selcted one', async () => {
        const allGenre = await $('[data-genre="All"]')
        await expect(allGenre).toHaveText('ALL')
        await expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
        await allGenre.click()
        await expect(allGenre).toHaveElementClassContaining('selectedGenre');

        const comedyGenre = await $('[data-genre="Comedy"]')
        await comedyGenre.click()
        await expect(comedyGenre).toHaveElementClassContaining('selectedGenre');
        await expect(allGenre).not.toHaveElementClassContaining('selectedGenre');
    });

    it('it should render all genres passed in props', async () => {
        const genreList = ['All', 'Comedy', 'Drama', 'Romance'];
        for (let genre of genreList) {
            const node = await $(`[data-genre="${genre}"]`)
            await expect(node).toHaveText(genre.toUpperCase())
        }
    });
});

