import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieForm from './MovieForm';
import userEvent from '@testing-library/user-event';

describe('<MovieForm />', () => {
  test('should mount when isVisible true', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isVisible={true} />);
    expect(screen.getByTestId('MovieForm')).toBeInTheDocument();
  });

  test('should not mount when isVisible false', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isVisible={false} />);
    expect(screen.queryByTestId('MovieForm')).not.toBeInTheDocument();
  });

  test('should mount Add Movie when info.id is falsy', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isVisible={true} />);
    expect(screen.queryByText('Add Movie')).toBeInTheDocument();
  });

  test('should mount Edit Movie when info.id is truthy', () => {
    render(<MovieForm info={{ id: 1 }} genreList={['Comedy']} isVisible={true} />);
    expect(screen.queryByText('Edit Movie')).toBeInTheDocument();
  });

  test('should leave form fields empty when Add Movie', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isVisible={true} />);

    expect(screen.getByText('Release Date')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-title')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-image-url')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-genre')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-runtime')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-overview')).not.toHaveValue();
  });

  test('should fill form fields with values from info', () => {
    const info = {
      id: 1,
      title: 'Test Title',
      releaseDate: '2014-01-13',
      imageUrl: 'https://image.png',
      genre: ['Drama'],
      runtime: '2h',
      overview: 'very interesting movie',
    };
    render(<MovieForm info={info} genreList={['Comedy', 'Drama']} isVisible={true} />);

    let formControl = within(screen.getByTestId('movie-form-title'));
    expect(formControl.getByRole('textbox')).toHaveValue('Test Title');
    expect(screen.getByPlaceholderText('MM / DD / YYYY')).toHaveValue('01 / 13 / 2014');

    formControl = within(screen.getByTestId('movie-form-image-url'));
    expect(formControl.getByRole('textbox')).toHaveValue('https://image.png');

    formControl = within(screen.getByTestId('movie-form-genre'));
    expect(formControl.getByText('Drama')).toBeInTheDocument();

    formControl = within(screen.getByTestId('movie-form-runtime'));
    expect(formControl.getByRole('textbox')).toHaveValue('2h');

    formControl = within(screen.getByTestId('movie-form-overview'));
    expect(formControl.getByRole('textbox')).toHaveValue('very interesting movie');
  });

  test('should reset form fields when reset button is clicked', async () => {
    const info = {
      id: 1,
      title: 'Test Title',
      rating: 7.1,
      releaseDate: '2014-01-13',
      imageUrl: 'Test Url',
      genre: ['Drama'],
      runtime: '2h',
      overview: 'Test Overview',
    };
    render(<MovieForm info={info} genreList={['Comedy', 'Drama']} isVisible={true} />);

    let formControl = within(screen.getByTestId('movie-form-title'));
    await userEvent.type(formControl.getByRole('textbox'), ' Updated');
    expect(formControl.getByRole('textbox')).toHaveValue('Test Title Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(formControl.getByRole('textbox')).toHaveValue('Test Title');

    formControl = within(screen.getByTestId('movie-form-image-url'));
    await userEvent.type(formControl.getByRole('textbox'), ' Updated');
    expect(formControl.getByRole('textbox')).toHaveValue('Test Url Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(formControl.getByRole('textbox')).toHaveValue('Test Url');

    formControl = within(screen.getByTestId('movie-form-rating'));
    await userEvent.type(formControl.getByRole('textbox'), ' Updated');
    expect(formControl.getByRole('textbox')).toHaveValue('7.1 Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(formControl.getByRole('textbox')).toHaveValue('7.1');

    formControl = within(screen.getByTestId('movie-form-runtime'));
    expect(formControl.getByRole('textbox')).toHaveValue('2h');
    await userEvent.type(formControl.getByRole('textbox'), ' Updated');
    expect(formControl.getByRole('textbox')).toHaveValue('2h Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(formControl.getByRole('textbox')).toHaveValue('2h');

    formControl = within(screen.getByTestId('movie-form-overview'));
    await userEvent.type(formControl.getByRole('textbox'), ' Updated');
    expect(formControl.getByRole('textbox')).toHaveValue('Test Overview Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(formControl.getByRole('textbox')).toHaveValue('Test Overview');

    formControl = within(screen.getByTestId('movie-form-genre'));
    await userEvent.click(formControl.getByRole('button'));
    await userEvent.click(screen.getByText('Comedy'));
    formControl = within(screen.getByTestId('movie-form-genre'));
    expect(formControl.getByText('Comedy, Drama')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Reset'));
    expect(formControl.getByText('Drama')).toBeInTheDocument();
  });

  test('should pass created movie object to submit handler', async () => {
    const submitHandler = jest.fn();
    render(<MovieForm info={{}} genreList={['Comedy']} isVisible={true} onSubmit={submitHandler} />);
    let formControl = within(screen.getByTestId('movie-form-title'));
    await userEvent.type(formControl.getByRole('textbox'), 'Test Title');
    formControl = within(screen.getByTestId('movie-form-image-url'));
    await userEvent.type(formControl.getByRole('textbox'), 'Test Url');
    formControl = within(screen.getByTestId('movie-form-rating'));
    await userEvent.type(formControl.getByRole('textbox'), 'Test Rating');
    formControl = within(screen.getByTestId('movie-form-runtime'));
    await userEvent.type(formControl.getByRole('textbox'), 'Test Runtime');
    formControl = within(screen.getByTestId('movie-form-overview'));
    await userEvent.type(formControl.getByRole('textbox'), 'Test Overview');
    formControl = within(screen.getByTestId('movie-form-genre'));
    await userEvent.click(formControl.getByRole('button'));
    await userEvent.click(screen.getByText('Comedy'));

    await userEvent.click(screen.getByText('Submit'));

    expect(submitHandler).toBeCalledTimes(1);
    expect(submitHandler).toBeCalledWith(
      expect.objectContaining({
        title: 'Test Title',
        imageUrl: 'Test Url',
        rating: 'Test Rating',
        runtime: 'Test Runtime',
        overview: 'Test Overview',
        genre: ['Comedy'],
      }),
    );
  });
});
