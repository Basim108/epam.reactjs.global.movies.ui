import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieForm from './MovieForm';
import userEvent from '@testing-library/user-event';

describe('<MovieForm />', () => {
  const info = {
    id: 1,
    title: 'Test Title',
    releaseDate: '2014-01-13',
    rating: 7.1,
    imageUrl: 'https://image.png',
    genre: ['Drama'],
    runtime: '2h',
    overview: 'very interesting movie',
  };

  test('should mount when isVisible true', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isOpen={true} />);
    expect(screen.getByTestId('movie-form-title')).toBeInTheDocument();
  });

  test('should not mount when isVisible false', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isOpen={false} />);
    expect(screen.queryByTestId('movie-form-title')).not.toBeInTheDocument();
  });

  test('should mount Add Movie when info.id is falsy', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isOpen={true} />);
    expect(screen.queryByText('Add Movie')).toBeInTheDocument();
  });

  test('should mount Edit Movie when info.id is truthy', () => {
    render(<MovieForm info={{ id: 1 }} genreList={['Comedy']} isOpen={true} />);
    expect(screen.queryByText('Edit Movie')).toBeInTheDocument();
  });

  test('should leave form fields empty when Add Movie', () => {
    render(<MovieForm info={{}} genreList={['Comedy']} isOpen={true} />);

    expect(screen.getByText('Release Date')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-title')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-image-url')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-genre')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-runtime')).not.toHaveValue();
    expect(screen.getByTestId('movie-form-overview')).not.toHaveValue();
  });

  test('should fill form fields with values from info', () => {
    render(<MovieForm info={info} genreList={['Comedy', 'Drama']} isOpen={true} />);

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
    render(<MovieForm info={info} genreList={['Comedy', 'Drama']} isOpen={true} />);

    const titleField = within(screen.getByTestId('movie-form-title'));
    await userEvent.type(titleField.getByRole('textbox'), ' Updated');
    expect(titleField.getByRole('textbox')).toHaveValue('Test Title Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(titleField.getByRole('textbox')).toHaveValue('Test Title');

    const imageField = within(screen.getByTestId('movie-form-image-url'));
    await userEvent.type(imageField.getByRole('textbox'), ' Updated');
    expect(imageField.getByRole('textbox')).toHaveValue('https://image.png Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(imageField.getByRole('textbox')).toHaveValue('https://image.png');

    const ratingField = within(screen.getByTestId('movie-form-rating'));
    await userEvent.type(ratingField.getByRole('textbox'), ' Updated');
    expect(ratingField.getByRole('textbox')).toHaveValue('7.1 Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(ratingField.getByRole('textbox')).toHaveValue('7.1');

    const runtimeField = within(screen.getByTestId('movie-form-runtime'));
    expect(runtimeField.getByRole('textbox')).toHaveValue('2h');
    await userEvent.type(runtimeField.getByRole('textbox'), ' Updated');
    expect(runtimeField.getByRole('textbox')).toHaveValue('2h Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(runtimeField.getByRole('textbox')).toHaveValue('2h');

    const overviewField = within(screen.getByTestId('movie-form-overview'));
    await userEvent.type(overviewField.getByRole('textbox'), ' Updated');
    expect(overviewField.getByRole('textbox')).toHaveValue('very interesting movie Updated');
    await userEvent.click(screen.getByText('Reset'));
    expect(overviewField.getByRole('textbox')).toHaveValue('very interesting movie');

    let genreField = within(screen.getByTestId('movie-form-genre'));
    await userEvent.click(genreField.getByRole('button'));
    await userEvent.click(screen.getByText('Comedy'));
    expect(genreField.getByText('Comedy, Drama')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Reset'));
    expect(genreField.getByText('Drama')).toBeInTheDocument();
  });

  test('should pass created movie object to submit handler', async () => {
    const submitHandler = jest.fn();
    render(<MovieForm info={{}} genreList={['Comedy']} isOpen={true} onSubmit={submitHandler} />);

    const titleField = within(screen.getByTestId('movie-form-title'));
    await userEvent.type(titleField.getByRole('textbox'), 'Test Title');

    const imageField = within(screen.getByTestId('movie-form-image-url'));
    await userEvent.type(imageField.getByRole('textbox'), 'https://image.png');

    const ratingField = within(screen.getByTestId('movie-form-rating'));
    await userEvent.type(ratingField.getByRole('textbox'), '7.1');

    const runtimeField = within(screen.getByTestId('movie-form-runtime'));
    await userEvent.type(runtimeField.getByRole('textbox'), 'Test Runtime');

    const overviewField = within(screen.getByTestId('movie-form-overview'));
    await userEvent.type(overviewField.getByRole('textbox'), 'very interesting movie');

    const genreField = within(screen.getByTestId('movie-form-genre'));
    await userEvent.click(genreField.getByRole('button'));
    await userEvent.click(screen.getByText('Comedy'));

    await userEvent.click(screen.getByText('Submit'));

    expect(submitHandler).toBeCalledTimes(1);
    expect(submitHandler).toBeCalledWith(
      expect.objectContaining({
        title: 'Test Title',
        imageUrl: 'https://image.png',
        rating: '7.1',
        runtime: 'Test Runtime',
        overview: 'very interesting movie',
        genre: ['Comedy'],
      }),
    );
  });
});
